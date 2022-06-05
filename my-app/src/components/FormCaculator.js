import {useState} from 'react'
import styled from 'styled-components'


const FormCaculator = () => {

    const [distance, setDistance] = useState(0);
    const [hours, setHours] = useState(0);
    const [pricePerHour, setPricePerHour] = useState(0);
    const [pricePerKm, setPricePerKm] = useState(0);
    const [income, setIncome] = useState(0);

    const profitability = income - ((distance*pricePerKm) + (hours*pricePerHour));

    return (
        <Form>
            <BoardContainer>
                <Label htmlFor='income'>
                    Income (€)
                    <input 
                        id='income'
                        type='number'
                        value={income}
                        onChange={(e) => setIncome(e.target.value)}
                    />
                </Label>
                <Label htmlFor='distance'>
                    Distance (km)
                    <input 
                        id='distance'
                        type='number'
                        value={distance}
                        onChange={(e) => setDistance(e.target.value)}
                    /> 
                </Label>
                <Label htmlFor='price-per-km'>
                    Price (per km)
                    <input 
                        id='price-per-km'
                        type='number'
                        value={pricePerKm}
                        onChange={(e) => setPricePerKm(e.target.value)}
                    />
                </Label>
                <Label htmlFor='hours'>
                    Time (hours)
                    <input 
                        id='hours'
                        type='number'
                        value={hours}
                        onChange={(e) => setHours(e.target.value)}
                    />
                </Label>
                <Label htmlFor='price-per-hour'>
                    Price (per hour)
                    <input 
                        id='price-per-hour'
                        type='number'
                        value={pricePerHour}
                        onChange={(e) => setPricePerHour(e.target.value)}
                    />
                </Label>
            </BoardContainer>
            <ResultContainer>
                <ResultDetail>Income: {income}</ResultDetail>
                <ResultDetail>Total distance based cost: {distance*pricePerKm}</ResultDetail>
                <ResultDetail>Total hour based cost: {hours*pricePerHour}</ResultDetail>
                <ResultDetail>Profitability: {profitability}</ResultDetail>
            </ResultContainer>
        </Form>
    )
}

export default FormCaculator

const Form = styled.form`
    display: flex;
    flex-direction: row;
    align-items: center;
    background-color: #eee;
    gap: 2rem;
    
`

const BoardContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`

const Label = styled.label`
    font-size: 1.8rem;
    font-weight: bold;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
    margin-bottom: 2rem;

    input {
        border: none;
        padding: 1rem;
        width: 20rem;
        box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
    }
    
`

const ResultContainer = styled(BoardContainer)`
   gap: 8.4brem;
   align-self: flex-start;
`
const ResultDetail = styled.p`
    font-size: 1.8rem;
    margin: 0;
    text-align: left;

`