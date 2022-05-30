import React from 'react';
import { render, screen } from '@testing-library/react';

import App, { calcularNovoSaldo } from './App';

describe('Componente principal', () => {
  
  describe('Ao abrir app do banco', () => {
    
    test('mostrar o nome do banco', () => {
      render(<App />);
      expect(screen.getByText('ByteBank')).toBeInTheDocument();
    })

    test('mostrar saldo', () => {
      render(<App />);
      expect(screen.getByText('Saldo:')).toBeInTheDocument();
    })

    test('o botão de realizar transação é exibido', () => {
      render(<App />);
      expect(screen.getByText('Realizar operação')).toBeInTheDocument();
    })
  })

  describe('Ao realizar transação', () => {
    test('de saque, o valor vai diminuir', () => {
      const valores = {
        transacao: 'saque',
        valor: 100
      }
      
      const novoSaldo = calcularNovoSaldo(valores, 1000);

      expect(novoSaldo).toBe(900);
    })
  })

})