import React, { Component,useState } from 'react'

import { MainLoginContainer } from './styles'
import { RightLoginContainer } from './styles'
import { CardLoginContainer } from './styles'
import { TextFieldContainer } from './styles'
import { CadastroContainer } from './styles'
import { BtnCadastroContainer} from './styles'
import { EntrarContainer} from './styles'


//import '../../stylescadastrar.css'

export default function HeaderCadastrar() {

    const [fname, setFname] = useState("")

    const handleChange = e => {    setFname(e.target.value)  }
        return(
            <>
                <body>
                    <MainLoginContainer>
                        <RightLoginContainer>
                            <CardLoginContainer>
                                <h1>HORSE FINANCES</h1>
                                <TextFieldContainer>
                                    <CadastroContainer>Nome Completo:</CadastroContainer>
                                    <input type='text' name='nomeCompleto' placeholder='Nome Completo'></input>
                                    <CadastroContainer>Email:</CadastroContainer>
                                    <input type='text' name='usuario' placeholder='Email'></input>
                                    <CadastroContainer>CPF:</CadastroContainer>
                                    <input type='text' name='CPF' placeholder='CPF'></input>
                                </TextFieldContainer>
                                <TextFieldContainer>
                                    <EntrarContainer>Senha:</EntrarContainer>
                                    <input type='password' name='senha' placeholder='Senha'></input>
                                    <EntrarContainer>Confirme a senha:</EntrarContainer>
                                    <input type='password' name='senha' placeholder='Confirmação senha'></input>
                                    <BtnCadastroContainer to="/entrar">Cadastrar</BtnCadastroContainer>
                                </TextFieldContainer>
                                
                            </CardLoginContainer>
                        </RightLoginContainer>
                        </MainLoginContainer>
                        
                </body>
                
            </>
        );
}
