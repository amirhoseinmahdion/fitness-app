import Password from '@mahdion/icon/password';
import Username from '@mahdion/icon/username';
import { toast } from 'sonner'
import React, { useState } from 'react';
import { CreateToken } from '@mahdion/utils/function';
import { useRouter } from 'next/router';

const ModalLogin = ({ setShowmodal }) => {
    const router = useRouter()
    const [form, setForm] = useState({
        name: "",
        password: ""
    })
    const chnageformhandler = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }
    const loginhandler = (e) => {
        e.preventDefault()
        if (form.name && form.password) {
            toast.success('ثبت نام شدید')
            CreateToken(form)
            setShowmodal(false)
            router.reload()

        } else {
            toast.error('مشکل در تکمیل فرم')
        }
    }
    return (
        <div className="modal-box">
            <button onClick={() => setShowmodal(false)} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
            <form className=' p-5' onSubmit={loginhandler}>
                <h1 className='text-purple text-2xl mb-5  font-bold'>ورود و ثبت نام</h1>
                <label className="input input-bordered flex items-center gap-2">
                    <Username />
                    <input name='name' value={form.name} onChange={chnageformhandler} type="text" className="grow" placeholder="نام" />
                </label>
                <label className="input mt-5 input-bordered flex items-center gap-2">
                    <Password />
                    <input name='password' value={form.password} onChange={chnageformhandler} type="password" className="grow" placeholder="رمزعبور" />
                </label>
                <button type='submit' className="mt-5 btn btn-outline hover:bg-bgback w-36 text-graylight bg-purple">ورود و ثبت</button>
            </form>

        </div>
    );
};

export default ModalLogin;