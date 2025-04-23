import { Request, Response } from "express"

export class AuthController {
    static login = async (req: Request, res: Response) => {
        console.log("Login function")
    }

    static register = async (req: Request, res: Response) => {
        console.log("Register function")
    }

    static confirmAccount = async (req: Request, res: Response) => {
        console.log("Confirm Account function")
    }

    static forgotPassword = async (req: Request, res: Response) => {
        console.log("Forgot Password function")
    }

    static validateCode = async (req: Request, res: Response) => {
        console.log("Validate Code function")
    }

    static resetPasswordWithToken = async (req: Request, res: Response) => {
        console.log("resetPasswordWithToken function")
    }

    static getUser = async (req: Request, res: Response) => {
        console.log("Get User function")
    }

    static updatePassword = async (req: Request, res: Response) => {
        console.log("Update Password function")
    }
}