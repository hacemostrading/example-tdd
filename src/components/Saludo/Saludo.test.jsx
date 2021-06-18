import React from 'react'
import {render, screen, fireEvent} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Saludo from './index'

test("Testeo del componente Saludo (render)", async () => {
    render(<Saludo usuario= "Vale" mensaje="que tal te va"></Saludo>)
})


test("Testeo del componente Saludo renderiza el usuario", async () => {
    render(<Saludo usuario= "Vale" mensaje="que tal te va"></Saludo>)

    const usuario = await screen.findByRole("heading")

    expect(usuario).toHaveTextContent("Vale")
})

test("Testeo del componente Saludo cuando existe boton", async () => {
    render(<Saludo usuario= "Vale" mensaje="que tal te va"></Saludo>)

    const boton = await screen.findByRole("button")

    expect(boton).toHaveTextContent("Mostrar saludo")
})

test("Testeo del componente Saludo con click en el boton", async () => {
    render(<Saludo usuario= "Vale" mensaje="que tal te va"></Saludo>)

    fireEvent.click(screen.getByRole("button"))

    screen.debug()

    const boton = await screen.findByText(/que tal/)

    expect(boton).toHaveTextContent("que tal te va")
})

test("Testeo del componente Saludo con click en el boton", async () => {
    render(<Saludo usuario= "Vale" mensaje="que tal te va"></Saludo>)

    fireEvent.click(screen.getByRole("button"))

    screen.debug()

    const boton = await screen.findByText(/que tal/)

    fireEvent.click(screen.getByRole("button"))
    
    const botonsinmensaje = await screen.findByText(/Sin mensaje/)

    expect(botonsinmensaje).toHaveTextContent("Sin mensaje")
})

