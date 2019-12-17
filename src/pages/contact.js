import React from 'react';
import Layout from '../components/layout'
import styled from 'styled-components'

const Contact = () => {
   
    const Section = styled.div`
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-template-rows: 6.25rem auto 6.25rem;
    `
    const Form = styled.div`
    background-color: rgba(255,255,255,0.1);
    border-radius: 5px;
    grid-column-start: 2;
    grid-column-end: span 4;
    grid-row-start: 2;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0 3.75rem;
    margin: 3.75x 0;
    h1 {
        text-align: center;
    }
    `
    const Field = styled.div`
    margin-bottom: 3.1rem;
    Field:focus{
        border-bottom: 1px solid #F06666;  
    }`
    
    const  Submit = styled.div`
    text-align: center;
    padding: 0;
    margin: 1.9rem 0;
    `

    return(    
    <Layout>
        <div className ='hero-head' /> 
        <Section>
        <Form>
         <h1>Kontakt</h1> 
         <div >
                    <form method='post' name='contact' action='/thanks' data-netlify='true'>
                    <input type="hidden" name="form-name" value="contact" />
                    
                    <Field>
                        <label>Imię</label>
                        <input type='text' name='name' />
                    </Field>
                    <Field>
                        <label>Email</label>
                        <input type='text' name='email' />
                    </Field>
                    <Field >
                        <label>Wiadomość</label>
                        <textarea name='message' rows='6'></textarea>
                    </Field>
                    <Submit>
                    <button type='submit' >Wyślij</button>
                    </Submit>
                    </form>
        </div> 
        </Form>
        </Section>
    </Layout>
)}

export default Contact