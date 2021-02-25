import React, { useContext, useEffect, useState } from 'react';
import { Content } from '../../../Components/Content';
import { RootContext } from '../../../RootContext.jsx';
import '../../../Components/styles.scss';
import { useInteractionEvent } from '../../../../Common/hooks';
import { LineHolder } from '../../../Components/Lines/LineHolder';
import { LineOnly } from '../../../Components/Lines/LineOnly';
import { lineColors, lineSides } from '../../../Components/Lines/Line';
import { LabelAndLine } from '../../../Components/Lines/LabelAndLine';
import { RowHolder } from '../../../Components/RowHolder';

type MenuProps = {
    setPage: React.Dispatch<React.SetStateAction<string>>
}

const MenuPage: React.FC<MenuProps> = ({ setPage }) => {
    const [activeSys, setActiveSys] = useState('FMGC'); // Placeholder till FMGS in place
    const [selected, setSelected] = useState(false);
    const [, , , setTitle] = useContext(RootContext);

    useInteractionEvent('A32NX_MCDU_L_L1_BUTTON_PRESSED', () => {
        setSelected(true);
        setActiveSys('FMGC');
        setTimeout(() => {
            setPage('IDENT');
        }, 200);
    });
    useInteractionEvent('A32NX_MCDU_L_L2_BUTTON_PRESSED', () => {
        setSelected(true);
        setActiveSys('ATSU');
    });
    useInteractionEvent('A32NX_MCDU_L_L3_BUTTON_PRESSED', () => {
        setSelected(true);
        setActiveSys('AIDS');
    });
    useInteractionEvent('A32NX_MCDU_L_L4_BUTTON_PRESSED', () => {
        setSelected(true);
        setActiveSys('CFDS');
    });

    useEffect(() => {
        setTitle('MCDU MENU');
    }, []);

    function determineColor(system) {
        if (activeSys === system) {
            if (selected) {
                setSelected(false);
                return lineColors.cyan;
            }
            return lineColors.green;
        }
        return lineColors.white;
    }

    function determineText(system) {
        if (activeSys === system) {
            if (selected) {
                return `<${system} (SEL)`;
            }
            return system === 'FMGC' ? '<FMGC (REQ)' : `<${system}`;
        }
        return system === 'FMGC' ? '<FMGC (REQ)' : `<${system}`;
    }

    return (
        <>
            <Content>
                <RowHolder index={1}>
                    <LineHolder>
                        <LineOnly value={determineText('FMGC')} color={determineColor('FMGC')} />
                    </LineHolder>
                    <LineHolder>
                        <LabelAndLine
                            labelValue={'SELECT\xa0'}
                            lineValue="NAV B/UP>"
                            labelSide={lineSides.right}
                            lineSide={lineSides.right}
                        />
                    </LineHolder>
                </RowHolder>
                <RowHolder index={2}>
                    <LineHolder>
                        <LineOnly value={determineText('ATSU')} color={determineColor('ATSU')} />
                    </LineHolder>
                </RowHolder>
                <RowHolder index={3}>
                    <LineHolder>
                        <LineOnly value={determineText('AIDS')} color={determineColor('AIDS')} />
                    </LineHolder>
                </RowHolder>
                <RowHolder index={4}>
                    <LineHolder>
                        <LineOnly value={determineText('CFDS')} color={determineColor('CFDS')} />
                    </LineHolder>
                </RowHolder>
                <RowHolder index={5}>
                    <LineHolder>
                        <LineOnly value="OPTIONS>" side={lineSides.right} />
                    </LineHolder>
                </RowHolder>
                <RowHolder index={6}>
                    <LineHolder>
                        <LineOnly value="RETURN>" side={lineSides.right} />
                    </LineHolder>
                </RowHolder>
            </Content>
        </>
    );
};

export default MenuPage;
