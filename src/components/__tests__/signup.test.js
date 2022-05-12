import Signup from "../register/Signup";
import {render,screen,waitFor,waitForElementToBeRemoved} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import {setupServer} from "msw/node";
import {rest} from "msw";
import {createRoot} from "react-dom/client";

// eslint-disable-next-line testing-library/no-node-access
const rootElement = document.getElementById('sroot');
const root = createRoot(rootElement);
describe("Sign Up Page",() => {
    describe("Layout", () => {
        it("has header", () => {
            root.render(<Signup/>);
            const header = screen.queryByRole("heading", {name: "Sign Up"});
            expect(header).toBeInTheDocument();
        })
        it("has username input",()=>{
            root.render(<Signup/>);
            const input = screen.getByLabelText("UserName");
             expect(input).toBeInTheDocument();

        })
        it("has email input",()=>{
            render(<Signup/>);
            const input = screen.getByLabelText("E-mail");
            expect(inputs.length).toBe(2);

        })
        it("has password input",()=>{
            render(<Signup/>);
            const input = screen.getByLabelText("Password");
            expect(input).toBeInTheDocument();

        })
        it("has password type for password input",()=>{
            render(<Signup/>);
            const input = screen.getByLabelText("Password");
            expect(input.type).toBe("password");

        })
        it("has password repeat input",()=>{
            render(<Signup/>);
            const input = screen.getByLabelText("Password Repeat");
            expect(input).toBeInTheDocument();

        })
        it("has password type for password repeat input",()=>{
            render(<Signup/>);
            const input = screen.getByLabelText("Password Repeat");
            expect(input.type).toBe("password");

        })
        it('has Sign Up button', () => {
            render(<Signup/>);
            const button = screen.queryByRole('button', {name: 'Sign Up'});
            expect(button).toBeInTheDocument();
        })
        it('disable the button initially', () => {
            render(<Signup/>);
            const button = screen.queryByRole('button', {name: 'Sign Up'});
            expect(button).toBeDisabled();
        })
    })
})
describe("Interactions",()=>{
    let requestBody;
    let counter=0;
    const server=setupServer(
        rest.post("/api/1.0/users",(req,res,ctx)=>{
            requestBody=req.body;
            counter+=1;
            return res(ctx.status(200));
        })
    );
    beforeEach(()=>{
        counter=0;
    });
    beforeAll(()=>server.listen());
    afterAll(()=>server.close());
    let button;
    const setup=()=>{
        render(<Signup/>);
        const usernameInput = screen.getByLabelText("Username");
        const emailInput = screen.getByLabelText("E-mail");
        const passwordInput = screen.getByLabelText("Password");
        const passwordRepeatInput = screen.getByLabelText("Password Repeat");
        userEvent.type(usernameInput,"user1")
        userEvent.type(emailInput,"user@maail.com")
        userEvent.type(passwordInput,"P4ssword")
        userEvent.type(passwordRepeatInput,"P4ssword")
        button = screen.queryByRole('button', {name: 'Sign Up'});
    }
    it("enable the button when password and password repeat fields have same value",()=>{
        setup();
        expect(button).toBeEnabled();
    })
    it("send username,email and password to backend after clicking the button",async()=>{
        setup();
        userEvent.click(button);
        await screen.findByText("Please check your e-mail to activate your account");

        // axios.post("/....",body)
        expect(requestBody).toEqual({
            username:"user1",
            email:"user1@mail.com",
            password:"P4ssword"
        })
    })
    it("disable button when there is an ongoing api call",async()=>{
        setup();
        userEvent.click(button);
        userEvent.click(button);
        await screen.findByText("Please check your e-mail to activate your account")

        // axios.post("/....",body)
        expect(counter).toBe(1);
    })
    it("display spinner while the api request in progress",async()=>{
        setup();
        userEvent.click(button);
        const spinner=screen.getByRole("status");
        expect(spinner).toBeInTheDocument();
        await screen.findByText("Please check your e-mail to activate your account")
    });
    it("does not display spinner when there is no api request",()=>{
        setup();
        const spinner=screen.queryByRole("status");
        expect(spinner).not.toBeInTheDocument();
    });
    it("display account activation notification after successful sign up request",async ()=> {
        setup();
        const message ="Please check your e-mail to activate your account"
        expect(screen.queryByText(message)).not.toBeInTheDocument();
        userEvent.click(button);
        const text = await screen.findByText(message);
        expect(text).toBeInTheDocument();
    })
    it("hide sign up form after successful sign up request",async ()=>{
        setup();
        const form=screen.getAllByTestId("form-sign-up");
        userEvent.click(button);
        await waitFor(()=>{
            expect(form).not.toBeInTheDocument();
        })


    })
    it("display validation message for username",async ()=>{
        server.use(
            rest.post("/api/1.0/users",(req,res,ctx)=>{
                return res(ctx.status(400),ctx.json({
                    validationErrors:{username:"Username cannot be null"}
                }));
            })
        );
        setup();
        userEvent.click(button);
        const validationError = await screen.findByText("Username cannot be null");
        expect(validationError).toBeInTheDocument();
    })
})
