import React from 'react';
import { render, screen } from '@testing-library/react';

import App from './App';

describe('Componente principal', () => {
  
  describe('Ao abrir app do banco', () => {
    

    test('Mostrar o nome do banco', () => {
      render(<App />);
      expect(screen.getByText('ByteBank')).toBeInTheDocument();
    })

    test('Mostrar saldo', () => {
      render(<App />);
      expect(screen.getByText('Saldo:')).toBeInTheDocument();
    })

    test('o botão de realizar transação é exibido', () => {
      render(<App />);
      expect(screen.getByText('Realizar operação')).toBeInTheDocument();
    })
  })
})