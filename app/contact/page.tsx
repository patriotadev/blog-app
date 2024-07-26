'use client'

import Button from "@/components/Button";
import { Card, CardBody, CardFooter, CardHeader } from "@/components/Card";
import Input from "@/components/Input";
import Modal from "@/components/Modal";
import Textarea from "@/components/Textarea";
import { ChangeEvent, useEffect, useState } from "react";

type ValuesType = {
    name: string,
    email: string,
    message: string
}

export default function Contact () {
    const [errors, setErrors] = useState<Record<string, string>>({});
    const [isFormValid, setIsFormValid] = useState<boolean>(false);
    const [showResult, setShowResult] = useState<boolean>(false);
    const [values, setValues] = useState<ValuesType>({
        name: '',
        email: '',
        message: ''
    });

    const validateForm = (values: ValuesType) => {
        let errors: any = {};

        if (!values.name) {
            errors.name = 'Name is required.';
        } else if (values.name.length < 3) {
            errors.name = 'Name must be at least 3 characters.';
        } else if (values.name.length > 32) {
            errors.name = 'Name must be maximum 32 characters.';
        } else if (!values.name.match(/^[A-Za-z]+$/)) {
            errors.name = 'Name must be letters and space only.';
        }

        if (!values.email) {
            errors.email = 'Email is required.';
        } else if (!/\S+@\S+\.\S+/.test(values.email)) {
            errors.email = 'Email is invalid.';
        }

        if (!values.message) {
            errors.message = 'Message is required.';
        } else if (values.message.length < 3) {
            errors.message = 'Message must be at least 3 characters.';
        } else if (values.message.length > 80) {
            errors.message = 'Message must be maximum 80 characters.';
        } else if (!values.message.match(/^[A-Za-z]+$/)) {
            errors.message = 'Message must be letters and space only.';
        }

        setErrors(errors);
        setIsFormValid(Object.keys(errors).length === 0);
    };

    const onSubmit = (data: ValuesType) => {
        if (isFormValid) {
            setShowResult(true)
        }
    }

    useEffect(() => {
        validateForm(values);
    }, [values]);

    return (
        <main className="flex min-h-screen flex-col items-center justify-between py-24 lg:px-36 xl:px-48 2xl:px-56 px-10">
            <Modal isOpen={showResult}>
                <Card>
                    <CardHeader>
                        {isFormValid ? <div className="flex gap-2 items-center">
                            <p>Success</p>
                            <div className="w-4 h-4 rounded-full bg-green-600" />
                        </div> : <div className="flex gap-2 items-center">
                            <p>Failed</p>
                            <div className="w-4 h-4 rounded-full bg-red-600" />
                        </div>}
                    </CardHeader>
                    <CardBody>
                        <div className="p-4">
                            <div className="flex flex-col flex-wrap mt-3 border-b pb-2">
                                <p className="font-semibold">Name</p>
                                <p>{values.name}</p>
                            </div>
                            <div className="flex flex-col flex-wrap mt-3 border-b pb-2">
                                <p className="font-semibold">Email</p>
                                <p>{values.email}</p>
                            </div>
                            <div className="flex flex-col gap-2 mt-3">
                                <p className="font-semibold">Message</p>
                                <p>{values.message}</p>
                            </div>
                        </div>
                    </CardBody>
                    <CardFooter>
                        <div className="flex w-full justify-end">
                            <Button color="bg-secondary" onClick={() => {
                                setValues({
                                    name: '',
                                    email: '',
                                    message: ''
                                });
                                setErrors({});
                                setIsFormValid(false);
                                setShowResult(false);
                            }}>OK</Button>
                        </div>
                    </CardFooter>
                </Card>
            </Modal>
            <Card>
                <CardHeader>
                    Contact Form
                </CardHeader>
                <CardBody>
                    <div className="flex flex-col gap-4">
                        <div className="flex lg:flex-nowrap flex-wrap gap-2 w-full">
                            <div className="w-full flex-wrap lg:w-1/2 flex flex-col gap-2">
                                <label className="text-sm font-semibold text-slate-600 pl-1">Name</label>
                                <Input type="text" value={values.name} onChange={(e: ChangeEvent<HTMLInputElement>) => setValues({...values, name: e.target.value})} />
                                {errors.name && <p className="text-sm text-red-600">{errors.name}</p>}
                            </div>
                            <div className="w-full flex-wrap lg:w-1/2 flex flex-col gap-2">
                                <label className="text-sm font-semibold text-slate-600 pl-1">Email</label>
                                <Input type="text" value={values.email} onChange={(e: ChangeEvent<HTMLInputElement>) => setValues({...values, email: e.target.value})} />
                                {errors.email && <p className="text-sm text-red-600">{errors.email}</p>}
                            </div>
                        </div>
                        <div className="w-full flex flex-col gap-2">
                            <label className="text-sm font-semibold text-slate-600 pl-1">Message</label>
                            <Textarea value={values.message} placeholder="Send your message here.." onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setValues({...values, message: e.target.value})}/>
                            <small className="pl-1">{values.message.length}/80</small>
                            {errors.message && <p className="text-sm text-red-600">{errors.message}</p>}
                        </div>
                    </div>
                </CardBody>
                <CardFooter>
                    <div className="flex justify-end w-full">
                        <Button color="bg-primary" onClick={() => onSubmit(values)}>Submit</Button>
                    </div>
                </CardFooter>
            </Card>
        </main>
    );
}