import { transport } from './../config/nodemailer';

type EmailType = {
    userName: string,
    email: string,
    token: string
}

export class AuthEmail {
    static sendConfirmationEmail = async (user: EmailType) => {
        const email = await transport.sendMail({
            from: "StockFlow",
            to: user.email,
            subject: "StockFlow - Confirm your account",
            html: `
                <h2> Hola ${user.userName}, </h2>
                <br />

                <h2>¡Bienvenido a StockFlow! Confirma tu correo electrónico para activar tu cuenta.</h2>
                <p>Haz clic en el enlace de abajo e introduce el código para completar tu registro:</p>
                <br />

                <p><b>Código:: </b> ${user.token} </p>
                <a href="#"> Confirmar mi cuenta </a>
            `
        })
        console.log(email)
    }
}