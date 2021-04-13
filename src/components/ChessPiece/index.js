import React from 'react';

import Bishop from './Bishop';
import BishopBlack from './BishopBlack';
import King from './King';
import KingBlack from './KingBlack';
import Knight from './Knight';
import KnightBlack from './KnightBlack';
import Pawn from './Pawn';
import PawnBlack from './PawnBlack';
import Queen from './Queen';
import QueenBlack from './QueenBlack';
import Rook from './Rook';
import RookBlack from './RookBlack';


export default ({ piece }) => {
    
    return (
        piece === 'p' ? (
            
            <Pawn/>
        
        ) : piece === 'P' ? (
            
            <PawnBlack/>
        
        ) : piece === 'b' ? (

            <Bishop/>

        ) : piece === 'B' ? (

            <BishopBlack/>

        ) : piece === 'n' ? (

            <Knight/>

        ) : piece === 'N' ? (

            <KnightBlack/>

        ) : piece === 'r' ? (

            <Rook/>

        ) : piece === 'R' ? (

            <RookBlack/>

        ) : piece === 'q' ? (

            <Queen/>

        ) : piece === 'Q' ? (

            <QueenBlack/>

        ) : piece === 'k' ? (

            <King/>

        ) : piece === 'K' ? (

            <KingBlack/>

        ) : null

    );
    
}