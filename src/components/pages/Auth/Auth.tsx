import React from "react";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import {StForm, StFormWrap} from "src/components/pages/Auth/styled";

const Auth = () => {
    const navigate = useNavigate();
    const [ login, setLogin] = React.useState({
        login: '',
        error: false,
    });
    const [ password, setPassword] = React.useState({
        password: '',
        error: false,
    });
    const {setUser} = React.useContext(AuthContext);

    const onSubmit = (e: React.SyntheticEvent) => {
        e.preventDefault();
        setUser(login.login);
        navigate("/");
    };

    const handleLoginChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLogin({
            login: e.target.value,
            error: e.target.value.length < 6,
        });
    };

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword({
            password: e.target.value,
            error: e.target.value.length < 10,
        });
    };

    const isValidationFailed = login.error || password.error;
    const isFormUncomplited = !login || !password;
    const isSubmitDisabled = isValidationFailed || isFormUncomplited;

    return (
        <StFormWrap>
            <StForm onSubmit={onSubmit} noValidate>
                <TextField
                    id="filled-basic"
                    label="Name"
                    variant="filled"
                    error={login.error}
                    type="text"
                    value={login.login}
                    onChange={handleLoginChange}
                />
                <TextField
                    id="filled-basic"
                    label="Pasword"
                    variant="filled"
                    error={password.error}
                    type="password"
                    value={password.password}
                    onChange={handlePasswordChange}
                />
                <Button type="submit" disabled={isSubmitDisabled} variant="contained">Submit</Button>
            </StForm>
        </StFormWrap>
    );
};

export default Auth;
