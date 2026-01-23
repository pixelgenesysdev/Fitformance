

function Button(props:{text:string,onClick?:()=>void, Customclass?:string}) {
  return (
            <button type="submit" className={`w-full  text-white border rounded-full mt-1.5 py-3 font-semibold hover:bg-[#089AD9] ${props.Customclass}`} 
            style={{ backgroundColor: '#0AB4FF',
            padding: '14px 24px',
            cursor: 'pointer',
            borderRadius: '80px',
            fontSize: '18px',
            fontWeight: 'bold',
            color: '#fff',
            transition: 'background-color 0.3s ease',
             }}
             onClick={props.onClick}
             >
              {props.text}
            </button>
  )
}
export default Button;