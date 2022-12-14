import { async } from "@angular/core/testing"
import { contains } from "cypress/types/jquery"

describe('empty spec', () => {
 
  beforeEach (function(){
    //cy.visit('localhost:4200')
  })
  context('verificación de consumo de la ap',()=>{
    it('visitando la página', ()=>{
        cy.visit('/home')
        cy.wait(3000)
        //cy.get('input').type('pika')
        cy.contains('bulbasaur').click()
    })
  })
  context('detalle del pokemon',()=>{
    it('visitando la página', ()=>{
        cy.visit('/pokeDetail/1')
        cy.wait(3000)
        //cy.get('input').type('pika')
        cy.contains('Type: grass')
        cy.contains('bulbasaur')
    })
  })

  
})