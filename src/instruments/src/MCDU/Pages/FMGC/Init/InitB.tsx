import React from 'react';
import { Content } from '../../../Components/Content';
import { LineHolder } from '../../../Components/Lines/LineHolder';
import { LineOnly } from '../../../Components/Lines/LineOnly';

export const InitBPage: React.FC = () => (
    <Content>
        <LineHolder>
            <LineOnly value="WIP" />
        </LineHolder>
    </Content>
);
