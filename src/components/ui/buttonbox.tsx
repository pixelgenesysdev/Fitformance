import { useNavigate } from "react-router-dom";

interface ButtonboxProps {
  buttontext: string;
  link: string;
}

export default function ButtonBox({ buttontext, link }: ButtonboxProps) {
  const navigate = useNavigate();

  return (
    <button
      className="text-18 text-white hover:opacity-90"
      style={{ background: '#0AB4FF', padding: '14px 42px', borderRadius: '80px' }}
      onClick={() => navigate(link)}
    >
      {buttontext}
    </button>
  );
}
