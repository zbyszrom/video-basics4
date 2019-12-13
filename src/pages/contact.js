import React from 'react';
import Layout from '../components/layout'


const Contact = () => (
    
    <Layout>
         <h1>Kontakt</h1> 
         <div >
                    <form method='post' name='contact' action='/thanks' data-netlify='true'>
                    <input type="hidden" name="form-name" value="contact" />
                    
                    <div >
                        <label>Imię</label>
                        <input type='text' name='name' />
                    </div>
                    <div >
                        <label>Email</label>
                        <input type='text' name='email' />
                    </div>
                    <div >
                        <label>Wiadomość</label>
                        <textarea name='message' rows='6'></textarea>
                    </div>
                    <div >
                    <button type='submit' >Wyślij</button>
                    </div>
                    </form>
        </div> 
    </Layout>
)

export default Contact