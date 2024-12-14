import React, {useRef, useState} from 'react'

const TresEnRaya = () => {

    const [board, setBoard] = useState([['','',''],['','',''],['','','']])
    const [player, setPlayer] = useState(0)
    const [turn, setTurn] = useState(0)
    const [ended, setEnded] = useState(false)
    const [winner, setWinner] = useState('')

    const getStarter = () => {
        let coin = Math.floor(Math.random()*2)
        console.log(coin)
        if(coin == 1 ){
            console.log('Empieza el jugador 2')
            setPlayer(2)
        }else{
            console.log('Empieza el jugador 1')
            setPlayer(1)
        }
    }

    const handleClick = (row, col) => {

        // Al hacer click realizamos 4 acciones
        // 1. Checkear que el espacio esté libre
        if (board[row][col] != '') return;
        // si lo está, entonces lo primero que hacemos es crear una "nueva" tabla que añadel el espacio con un valor modificado, bien O o bien X en función del player
        else{
            const newBoard = [...board]
            newBoard[row][col] = player == 1 ? 'O' : 'X'
            setBoard(newBoard)
            // 2. Suma un nuevo turno
            setTurn(prevTurn => prevTurn + 1)
            // 3. Cambia de jugador
            setPlayer(player === 1 ? 2 : 1)
        }

        // 4. En cada clic, se avalúan las posibles combinaciones ganadoras.
        // En caso de que alguna sea válida, ended pasa a ser true, e inhabilita el resto de espacios. Aparece el nombre del ganador
        // Lógica de negocio. Posibles combinaciones ganadoras
        if(board[0][0] === board[1][1] && board[1][1] === board[2][2] && board[0][0] === 'X'){
            setEnded(true)
            setPlayer(prevPlayer => prevPlayer === 1 ? 2 : 1 )
            setWinner('Ganador jugador ' + player)
        }else if(board[0][0] === board[0][1] && board[0][1] === board[0][2] && board[0][0] === 'X'){
            setEnded(true)
            setPlayer(prevPlayer => prevPlayer === 1 ? 2 : 1 )
            setWinner('Ganador jugador ' + player)
        }else if(board[1][0] === board[1][1] && board[1][1] === board[1][2] && board[1][0] === 'X'){
            setEnded(true)
            setPlayer(prevPlayer => prevPlayer === 1 ? 2 : 1 )
            setWinner('Ganador jugador ' + player)
        }else if(board[2][0] === board[2][1] && board[2][1] === board[2][2] && board[2][0] === 'X'){
            setEnded(true)
            setPlayer(prevPlayer => prevPlayer === 1 ? 2 : 1 )
            setWinner('Ganador jugador ' + player)
        }else if(board[0][0] === board[1][0] && board[1][0] === board[2][0] && board[0][0] === 'X'){
            setEnded(true)
            setPlayer(prevPlayer => prevPlayer === 1 ? 2 : 1 )
            setWinner('Ganador jugador ' + player)
        }else if(board[0][1] === board[1][1] && board[1][1] === board[2][1] && board[0][1] === 'X'){
            setEnded(true)
            setPlayer(prevPlayer => prevPlayer === 1 ? 2 : 1 )
            setWinner('Ganador jugador ' + player)
        }else if(board[0][2] === board[1][2] && board[1][2] === board[2][2] && board[0][2] === 'X'){
            setEnded(true)
            setPlayer(prevPlayer => prevPlayer === 1 ? 2 : 1 )
            setWinner('Ganador jugador ' + player)
        }else if(board[2][0] === board[1][1] && board[1][1] === board[0][2] && board[2][0] === 'X'){
            setEnded(true)
            setPlayer(prevPlayer => prevPlayer === 1 ? 2 : 1 )
            setWinner('Ganador jugador ' + player)
        }else if(board[0][0] === board[1][1] && board[1][1] === board[2][2] && board[0][0] === 'O'){
            setEnded(true)
            setPlayer(prevPlayer => prevPlayer === 1 ? 2 : 1 )
            setWinner('Ganador jugador ' + player)
        }else if(board[0][0] === board[0][1] && board[0][1] === board[0][2] && board[0][0] === 'O'){
            setEnded(true)
            setPlayer(prevPlayer => prevPlayer === 1 ? 2 : 1 )
            setWinner('Ganador jugador ' + player)
        }else if(board[1][0] === board[1][1] && board[1][1] === board[1][2] && board[1][0] === 'O'){
            setEnded(true)
            setPlayer(prevPlayer => prevPlayer === 1 ? 2 : 1 )
            setWinner('Ganador jugador ' + player)
        }else if(board[2][0] === board[2][1] && board[2][1] === board[2][2] && board[2][0] === 'O'){
            setEnded(true)
            setPlayer(prevPlayer => prevPlayer === 1 ? 2 : 1 )
            setWinner('Ganador jugador ' + player)
        }else if(board[0][0] === board[1][0] && board[1][0] === board[2][0] && board[0][0] === 'O'){
            setEnded(true)
            setPlayer(prevPlayer => prevPlayer === 1 ? 2 : 1 )
            setWinner('Ganador jugador ' + player)
        }else if(board[0][1] === board[1][1] && board[1][1] === board[2][1] && board[0][1] === 'O'){
            setEnded(true)
            setPlayer(prevPlayer => prevPlayer === 1 ? 2 : 1 )
            setWinner('Ganador jugador ' + player)
        }else if(board[0][2] === board[1][2] && board[1][2] === board[2][2] && board[0][2] === 'O'){
            setEnded(true)
            setPlayer(prevPlayer => prevPlayer === 1 ? 2 : 1 )
            setWinner('Ganador jugador ' + player)
        }else if(board[2][0] === board[1][1] && board[1][1] === board[0][2] && board[2][0] === 'O'){
            setEnded(true)
            setPlayer(prevPlayer => prevPlayer === 1 ? 2 : 1 )
            setWinner('Ganador jugador ' + player)
        }else{
            setEnded(false)
        }
    }

    return (
    <div className='flex flex-col gap-4'>
        <div className='flex gap-2 items-center justify-center'>
            <button className={`w-fit h-16 p-2 bg-blue-800 ${player != 0 ? 'hidden' : 'block'}`} onClick={getStarter}>Haz click para comenzar</button>
            <h2>{`${turn === 0 ? 'Comienza el jugador: ' : 'Turno del jugador: '} `} {player}</h2>
        </div>
        <div className="bg-blue-400 grid grid-cols-3 gap-2">
        {board.map((row, rowIndex) =>
          row.map((cell, colIndex) => (
            <input
              key={`${rowIndex}-${colIndex}`}
              type="text"
              className="border-[1px] border-white w-[150px] h-[150px] text-white bg-blue-400 text-[96px] text-center uppercase"
              value={cell}
              onClick={() => handleClick(rowIndex, colIndex)}
              readOnly
              disabled={ended}
            />
          ))
        )}
      </div>
      <h3>{winner}</h3>
    </div>
  )
}

export default TresEnRaya