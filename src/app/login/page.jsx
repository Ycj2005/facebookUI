import styles from '@/app/login.module.scss'
import Link from 'next/link'

export default function login() {
    return (
        <div className={styles.loginArea}>

            <div className={styles.loginForm}>
                <h4 className='text-center'>Login</h4>

                <form className="row g-3" action="" method="post">
                    <div className="col-12">
                        <div><label className='label' htmlFor="username">Username Name:</label></div>
                        <input type="text" name="username" id="Uname_id" className='inpt' required />
                        <div className="invalid-feedback">
                            Username required
                        </div>
                    </div>
                    <div className="col-12">
                        <div><label className='label' htmlFor="password">Password :</label></div>
                        <input type="password" name="password" id="password_id" className='inpt' required />
                        <div className="invalid-feedback">
                            Invalid password
                        </div>
                    </div>

                    <div className="col-12">
                        <button className="btn btn-primary" type="submit">Submit form</button>
                    </div>
                    <div className='text-center or'>
                        OR
                    </div>
                    <div className='register text-center'>
                        <Link href='/register' className='linkreg'>
                            Click Here for Register !
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    )
}