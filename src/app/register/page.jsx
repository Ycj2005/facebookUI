import ShowAlert from '@/Components/alert';
import { requestfunction } from '../api/social/route';
import { doPost } from '@/actions/reqActions';
import { redirect } from 'next/navigation'
import { revalidateTag } from 'next/cache'
import { revalidatePath } from 'next/cache'



export default async function Registerpage() {


    async function formHandler(formData) {
        'use server'
        var data = {};
        formData.forEach((value, key) => (data[key] = value));
        const res = await doPost('/social', data);
        console.log(res)
        if (res.status == 200) {
            redirect('/login')
        } else {
            revalidatePath('/register')
        }
    }


    return (

        <div className='main_class'>

            <div className='inner_form '>
                <h3 className='form_head text-center' >Register Form</h3>

                <form action={formHandler} method='post' className='form'>
                    <div className='first_name'>
                        <div><label className='label' htmlFor="fname">First Name:</label></div>
                        <input type="text" name="fname" id="fname_id" className='inpt' />
                    </div>
                    <div className='last_name'>
                        <div><label className='label' htmlFor="lname">Last Name:</label></div>
                        <input type="text" name="lname" id="lname_id" className='inpt' />
                    </div>
                    <div className='user_name'>
                        <div><label className='label' htmlFor="uname">User Name:</label></div>
                        <input type="text" name="uname" id="uname_id" className='inpt' />
                    </div>
                    <div className='date_form'>
                        <div style={{ marginBottom: "10px" }}><label htmlFor="date" className='label'>Date :</label></div>
                        <input type="date" name='date' />
                    </div>
                    <div className='email_form'>
                        <div><label className='label' htmlFor="email">Email Address :</label></div>
                        <input type="email" name="email" id="email_id" className='inpt' />
                    </div>
                    <div className='password'>
                        <div><label className='label' htmlFor="pass">Password :</label></div>
                        <input type="password" name="password" id="pass_id" className='inpt' maxLength={10} />
                    </div>
                    <div className='Confirm_password'>
                        <div><label className='label' htmlFor="confpass">Confirm Password :</label></div>
                        <input type="password" name="confpassword" id="confpass_id" className='inpt' maxLength={10} />
                    </div>
                    <div className='submit_btn'>
                        <input type="submit" value="Register" className='btn btn-primary sub-btn' />
                    </div>
                </form>
            </div>

        </div>
    )
}
