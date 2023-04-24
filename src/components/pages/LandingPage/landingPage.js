import React, { Component } from 'react'
import logo from '../../../img/indice.png'


import { MainLoginContainer } from './styles'
import { LeftLoginContainer } from './styles'
import { RightLoginContainer } from './styles'
import { CardLoginContainer } from './styles'
import { TextFieldContainer } from './styles'
import { CadastroContainer } from './styles'
import { BtnCadastroContainer } from './styles'
import { BtnEntrarContainer } from './styles'
import { EntrarContainer} from './styles'


//import '../../style.css'

function Home() {
    
        return(
            <>
                <body>
                    <MainLoginContainer>
                        <LeftLoginContainer>
                            <h1>Faça login ou</h1>
                            <h1>entre para o nosso time</h1>
                            <img src={logo} />
                        </LeftLoginContainer>
                        <RightLoginContainer>
                            <CardLoginContainer>
                                <h1>HORSE FINANCES</h1>
                                <TextFieldContainer>
                                    <CadastroContainer>Para se cadastrar:</CadastroContainer>
                                    <BtnCadastroContainer to="/cadastro">Cadastre-se</BtnCadastroContainer>
                                </TextFieldContainer>
                                <TextFieldContainer>
                                    <EntrarContainer>Ja tem uma conta?</EntrarContainer>
                                    <BtnEntrarContainer to="/principal">Entrar</BtnEntrarContainer>
                                </TextFieldContainer>
                                
                            </CardLoginContainer>
                        </RightLoginContainer>
                        </MainLoginContainer>
                </body>
                
            </>
        )
    }


export default Home