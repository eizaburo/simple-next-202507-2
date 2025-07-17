"use client"

import styles from './contact.module.css';
import { useForm } from 'react-hook-form';

function Contact() {

    const { register, handleSubmit, formState: { errors } } = useForm();

    const _onSubmit = async (data) => {
        // alert(`title:${data.title}, email:${data.email}, message:${data.message}`);

        // const url = "https://script.google.com/macros/デプロイID/exec";
        const url = process.env.NEXT_PUBLIC_GAS_API_URL;

        try {

            const response = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-type": "application/x-www-form-urlencoded",
                },
                body: new URLSearchParams({
                    title: data.title,
                    email: data.email,
                    message: data.message
                }).toString()
            });

            const responseText = await response.text();
            alert(responseText);
        } catch (error) {
            alert(error);
        }

    }

    return (
        <>
            <main>
                <section className={styles.hero}>
                    <h1>お問合せフォーム</h1>
                    <p>お気軽にお問合せ下さい。</p>
                </section>
                <section>
                    <form className={styles.contactForm} onSubmit={handleSubmit(_onSubmit)}>
                        <label htmlFor='title'>お問合せタイトル</label>
                        <input type='text' id='title' name='title' {...register("title", {
                            required: "お問合せタイトルは必須です。"
                        })} />
                        {errors.title && <p className={styles.errorMessage}>{errors.title.message}</p>}

                        <label htmlFor='email'>Email</label>
                        <input type='email' id='email' name='email' {...register("email", {
                            required: "Emailは必須です。",
                            pattern: {
                                value: /^[^@\s]+@[^@\s]+\.[^@\s]+$/,
                                message: "Emailを正しく入力してください。"
                            }
                        })} />
                        {errors.email && <p className={styles.errorMessage}>{errors.email.message}</p>}

                        <label htmlFor='message'>お問合せ内容</label>
                        <textarea id='message' name='message' rows={5} {...register("message", {
                            required: "お問合せ内容は必須です。",
                            maxLength: {
                                value: 10,
                                message: "1文字以上、10文字以下で入力してください。"
                            }
                        })}></textarea>
                        {errors.message && <p className={styles.errorMessage}>{errors.message.message}</p>}

                        <button type='submit' id='button'>送信</button>
                    </form>
                </section>
            </main>
        </>
    );
}

export default Contact;