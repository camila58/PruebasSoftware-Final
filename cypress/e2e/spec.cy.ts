import { async } from "@angular/core/testing"
import { contains } from "cypress/types/jquery"

describe('empty spec', () => {
 
  beforeEach (function(){
    //cy.visit('https://pokeapi.co/api/v2')
  })
  context('verificación de consumo de la ap',()=>{
    it('', ()=>{
      cy.request('GET','https://pokeapi.co/api/v2')
      .should((response )=> {
        expect(response.status).to.eq(200)
        expect(response.body).to.have.property('stat','https://pokeapi.co/api/v2/stat/')
      })
    })
  })
  context('verificacion de la existencia de algún pokemon',()=>{
    it('', ()=>{
      cy.request('GET','https://pokeapi.co/api/v2/stat/')
      .should((response )=> {
        expect(response.status).to.eq(200)
        expect(response.body).to.have.property('count',8)
      })
    })
  })

})