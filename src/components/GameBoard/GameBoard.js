import { useEffect, useState } from "react";
import { useRef } from 'react';
import './GameBoard.css';

export const GameBoard = () => {
    const [isAlter,setIsAlter] = useState(false);
    const [winner,setWinner]=useState('');
    const [isRestarted,setIsRestarted]=useState(false)
    const [myName,setMyName]=useState('');
    const [nameSubmit,setNameSubmit]=useState('');
    // set button values
    const [btnsValues,setBtnsValues] = useState({
        btnOne:'',
        btnTwo:'',
        btnThree:'',
        btnFour:'',
        btnFive:'',
        btnSix:'',
        btnSeven:'',
        btnEight:'',
        btnNine:'',
    });
    
    const playerOneIcon = 'O';
    const playerTwoIcon = 'X';
    const btnOne = useRef();
    const btnTwo = useRef();
    const btnThree = useRef();
    const btnFour = useRef();
    const btnFive = useRef();
    const btnSix = useRef();
    const btnSeven = useRef();
    const btnEight = useRef();
    const btnNine = useRef();

    // handle all button click 
    const handleButtonClick = (btnName,isAlter,btnId) => {
        console.log(isAlter);
        let playerIconSymbol = playerOneIcon;
        if(!isAlter){
            playerIconSymbol = playerOneIcon;
        }else{
            playerIconSymbol = playerTwoIcon;
        }
        setIsAlter(!isAlter);
        const btn = document.getElementById(btnId);
        btnsValues[btnId] = playerIconSymbol;
        console.log(btnsValues)
        // console.log(btn)
        console.log(btnsValues,'is disabled')
        btn.setAttribute('disabled','true');
        console.log(btn)
        checkBoardStatus();
    }

    // reset the game 
    const resetGameBoard=() => {
        setBtnsValues({
            btnOne:'',
            btnTwo:'',
            btnThree:'',
            btnFour:'',
            btnFive:'',
            btnSix:'',
            btnSeven:'',
            btnEight:'',
            btnNine:'',
        })
        const btnArray = document.getElementsByTagName('button');
        // const btnArray = document.getElementsByName('button');
        console.log(btnArray)
        let iArr = ['btnOne','btnTwo','btnThree','btnFour','btnFive','btnSix','btnSeven','btnEight','btnNine'];
        iArr.map(i => {
            const btnCurrent = document.getElementById(i);
            console.log(btnCurrent)
            btnCurrent.removeAttribute('disabled');
        })
        setIsAlter(false);
        setIsRestarted(false);
        setWinner('');
    }


    // checking the status of the board 
    const checkBoardStatus=() =>{
        const { btnOne, btnTwo, btnThree, btnFour, btnFive, btnSix, btnSeven, btnEight, btnNine} = btnsValues;
        console.log(btnOne+btnTwo+btnThree)
        let horOne = btnOne+btnTwo+btnThree;
        let horTwo = btnFour+btnFive+btnSix;
        let horthree = btnSeven+btnEight+btnNine;
        let verOne = btnOne+btnFour+btnSeven;
        let verTwo = btnTwo+btnFive+btnEight;
        let verThree = btnThree+btnSix+btnNine;
        let diagOne = btnOne+btnFive+btnNine;
        let diagTwo = btnThree+btnFive+btnSeven;
        let fullBoard = btnOne+btnTwo+btnThree+btnFour+btnFive+btnSix+btnSeven+btnEight+btnNine;
        const canMatchOne = ['OOO'];
        const canMatchTwo = ['XXX'];
        if(canMatchOne.includes(horOne) || canMatchOne.includes(horTwo) || canMatchOne.includes(horthree) || canMatchOne.includes(verOne) || canMatchOne.includes(verTwo) || canMatchOne.includes(verThree) || canMatchOne.includes(diagOne) || canMatchOne.includes(diagTwo) ){
            console.log(`winner is ${playerOneIcon}`);
            setWinner(playerOneIcon)
            setIsRestarted(true);
            // window.alert(' winner is OOO')
            // resetGameBoard();
            
            
        }
        else if(canMatchTwo.includes(horOne) || canMatchTwo.includes(horTwo) || canMatchTwo.includes(horthree) || canMatchTwo.includes(verOne) || canMatchTwo.includes(verTwo) || canMatchTwo.includes(verThree) || canMatchTwo.includes(diagOne) || canMatchTwo.includes(diagTwo) ){
            console.log(`winner is ${playerTwoIcon}`);
            setWinner(playerTwoIcon);
            setIsRestarted(true);
            // window.alert(' winner is XXX')
            // resetGameBoard();
        }
        else if(fullBoard.length==9){
            console.log(`match is draw`);
            setWinner('draw')
            setIsRestarted(true);
        }
    }
    const restartShowcaseStyle={
        position: 'absolute',
        height: '100%',
        width: '100%',
        backgroundColor: 'antiquewhite',
        textAlign: 'center',
        display: !isRestarted? 'none': 'grid',
        alignItems: 'center'
    }
    const nameStyle={
        position: 'absolute',
        height: '100%',
        width: '100%',
        backgroundColor: 'antiquewhite',
        textAlign: 'center',
        display: !nameSubmit? 'grid': 'none',
        alignItems: 'center'
    }
    const handlePlayerNameSubmit = e => {
        e.preventDefault();
        if(myName){
            console.log('myName');
            console.log(myName);
            setNameSubmit(myName);
        }
    }
    return (
        <div>
        {nameSubmit && <h2 style={{textAlign: 'center'}}>hello {nameSubmit}</h2>}
        <div className="game-board-container">
            <button id="btnOne" onClick={()=>handleButtonClick(btnOne,isAlter,'btnOne')} ref={btnOne} >{btnsValues.btnOne}</button>
            <button id="btnTwo" onClick={()=>handleButtonClick(btnTwo,isAlter,'btnTwo')} ref={btnTwo} >{btnsValues.btnTwo}</button>
            <button id="btnThree" onClick={()=>handleButtonClick(btnThree,isAlter,'btnThree')} ref={btnThree} >{btnsValues.btnThree}</button>
            <button id="btnFour" onClick={()=>handleButtonClick(btnFour,isAlter,'btnFour')} ref={btnFour} >{btnsValues.btnFour}</button>
            <button id="btnFive" onClick={()=>handleButtonClick(btnFive,isAlter,'btnFive')} ref={btnFive} >{btnsValues.btnFive}</button>
            <button id="btnSix" onClick={()=>handleButtonClick(btnSix,isAlter,'btnSix')} ref={btnSix} >{btnsValues.btnSix}</button>
            <button id="btnSeven" onClick={()=>handleButtonClick(btnSeven,isAlter,'btnSeven')} ref={btnSeven} >{btnsValues.btnSeven}</button>
            <button id="btnEight" onClick={()=>handleButtonClick(btnEight,isAlter,'btnEight')} ref={btnEight} >{btnsValues.btnEight}</button>
            <button id="btnNine" onClick={()=>handleButtonClick(btnNine,isAlter,'btnNine')} ref={btnNine} >{btnsValues.btnNine}</button>
            <div style={nameStyle}>
                <form onSubmit={e=>handlePlayerNameSubmit(e)}>
                    <input type="text" onBlur={e => setMyName(e.target.value)} placeholder="your name"/>
                    <button className="restart-btn" type="submit">Enter</button>
                </form>
            </div>
            <div style={restartShowcaseStyle} className="result-showcase">
                <div>
                    {winner=='draw'? <h3>Match is draw</h3>:
                    (winner=='O'? <h3>winner is {winner} one</h3>: <h3>winner is {winner} two</h3>)}
                    <hr/>
                    <button onClick={resetGameBoard} className="restart-btn">Restart</button>
                </div>
            </div>
        </div>
        </div>
    )
}
