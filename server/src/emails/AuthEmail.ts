import { transport } from "../config/nodemailer"

type EmailType = {
    userName: string,
    email: string,
    code: string
}

export class AuthEmail {
    static sendConfirmationEmail = async (user: EmailType) => {
        const email = await transport.sendMail({
            from: "StockFlow",
            to: user.email,
            subject: "StockFlow - Confirma tu cuenta",
            html: `
                <h2> Hola ${user.userName}, </h2>
                <br />

                <h2>¡Bienvenido a StockFlow! Confirma tu correo electrónico para activar tu cuenta.</h2>
                <p>Haz clic en el enlace de abajo e introduce el código para completar tu registro:</p>
                <br />

                <p><b>Código:: </b> ${user.code} </p>
                <a href="#"> Confirmar mi cuenta </a>
            `
        })
        // console.log(email)
    }

    static sendForgotPasswordEmail = async (user: EmailType) => {
        const email = await transport.sendMail({
            from: "StockFlow",
            to: user.email,
            subject: "StockFlow - Reestablece tu contraseña",
            html: `
                <h2> Hola ${user.userName}, </h2>
                <br />

                <h2>Recientemente solicitaste restablecer tu contraseña para tu cuenta de StockFlow. Usa el código a continuación para restablecerla:</h2>
                <br />

                <p><b>Código: </b> ${user.code} </p>
                <a href="#"> Reestablece tu contraseña </a>
            `
        })
        // console.log(email)
    }
}