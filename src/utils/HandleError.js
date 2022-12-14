import { ErrorLogger } from "./logger";
import { format } from "date-fns";
import sendWithNodeMailer from "./gmail/send_with_node_mailer";

export const HandleMongoError = (error, res) => {
    if (error.name === "ValidationError") {
        let errors = {};

        Object.keys(error.errors).forEach((key) => {
            errors[key] = error.errors[key].message;
        });

        return res.status(400).send(errors);
    }

    if (error.code === 11000) {
        return res.status(400).send({
            message: "Duplicate Entry",
        });
    }
    res.status(500).send("Something went wrong");
};

export const extractErrorMessage = (error) =>
    (error.response && error.response.data && error.response.data.message) ||
    error.message ||
    error.toString();

const HandleError = (action, error, notifyViaEmail = false) => {
    const message = extractErrorMessage(error);
    const errorInfo = `${action} failed: ${message}`;
    ErrorLogger(errorInfo);
    if (notifyViaEmail) {
        //sen email
    }
    return {
        error: true,
        message,
    };
};

export default HandleError;
