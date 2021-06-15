import React from 'react';
import styled from 'styled-components';

const Line = styled.path`
    stroke: ${({ theme }) => theme.darkGray};
    stroke-width: 10;
`

const Triangle = styled.path`
    fill: ${({ theme }) => theme.darkGray};
`

export default function ResetIcon() {
    return (
        <svg width="127" height="141" viewBox="0 0 127 141" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Line d="M59.5868 22.3456C87.6086 22.3456 108.164 43.6974 108.164 71.6973C108.164 99.6972 88.1085 122.197 59.5868 122.197C59.5868 122.197 47.1085 122.197 37.1086 117.198" stroke-width="9"/>
            <Triangle d="M41.4333 23.4007L63.9333 42.8863L63.9333 3.91512L41.4333 23.4007Z" />
            <Line d="M34.6066 29.2405C7.10847 42.6975 -1.38971 86.6545 25.6085 109.697C25.6085 109.697 30.7064 114.541 39.4625 118.26" stroke-width="9"/>
        </svg>
    )
}