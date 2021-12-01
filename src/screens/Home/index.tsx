import React, { useState } from 'react';
import { ActivityIndicator } from 'react-native';
import { UIInput } from '../../components/UIInput';
import { format } from 'date-fns';
import I18n from 'i18n-js';

import {
  Container,
  OutputDate,
  Inputs,
  Output,
  OutputBox,
  ConfirmButton,
  ConfirmButtonTitle,
  Load
} from './styles';

export function Home() {
  const [minInput, setMinInput] = useState('1')
  const [maxInput, setMaxInput] = useState('')
  const [result, setResult] = useState({} as { value: number; date: Date })
  const [load, setLoad] = useState(false)

  function handleSetInput(value: string, type: 'min' | 'max') {
    const setState = (state: string) => type === 'min' ? setMinInput(state) : setMaxInput(state)

    const formattedValue = value.replace(/[^0-9\.]/g, '')

    const dots = formattedValue.split('').filter(value => value === '.')
    if (dots.length > 1) return

    return setState(formattedValue)
  }

  function handleGenerateNumber() {
    setLoad(true)

    setTimeout(() => {
      const max = Number(maxInput)
      const min = Number(minInput)

      const value = Math.floor(Math.random() * (max - min + 1) + min)

      setResult({
        value,
        date: new Date()
      })
      setLoad(false)
    }, 3000);
  }

  function renderResult() {
    return I18n.toNumber(result.value, {
      separator: ',',
      delimiter: '.',
      precision: 2,
      strip_insignificant_zeros: true
    })
  }

  function renderDate() {
    return format(result.date, 'HH:mm:SS - dd/MM/yyyy')
  }

  return (
    <Container>

      <OutputBox>
        {load
          ? (
            <Load>
              <ActivityIndicator color="black" size="large" />
            </Load>
          ) : !!result.date && (
            <>
              <Output>{renderResult()}</Output>
              <OutputDate>{renderDate()}</OutputDate>
            </>
          )
        }
      </OutputBox>

      <Inputs>
        <UIInput
          title="Mínimo"
          keyboardType='numeric'
          value={minInput}
          onChangeText={value => handleSetInput(value, 'min')}
        />

        <UIInput
          title="Máximo"
          keyboardType='numeric'
          value={maxInput}
          onChangeText={value => handleSetInput(value, 'max')}
        />

        <ConfirmButton onPress={handleGenerateNumber}>
          <ConfirmButtonTitle>GERAR NÚMERO</ConfirmButtonTitle>
        </ConfirmButton>
      </Inputs>
    </Container>
  );
}
