import React from "react"

interface IconCkeckedProps {
  isChecked?: boolean
}

const Date = ({isChecked}: IconCkeckedProps) => {
  return isChecked ? (
    <svg
      width="15"
      height="9"
      viewBox="0 0 15 9"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.66648 6.87477L10.2103 0.139168C10.3908 -0.0463894 10.6839 -0.0463894 10.8643 0.139168C11.0452 0.324251 11.0452 0.62513 10.8643 0.810213L3.99532 7.88086C3.8167 8.06405 3.51946 8.06405 3.34084 7.88086L0.135337 4.60679C-0.0451125 4.42171 -0.0451125 4.1213 0.135337 3.93575C0.315787 3.75019 0.608904 3.75019 0.789354 3.93575L3.66648 6.87477ZM7.14111 7.06654L14.1548 0.139864C14.3479 -0.0466214 14.6616 -0.0466214 14.8548 0.139864C15.0484 0.325873 15.0484 0.628256 14.8548 0.814264L7.55877 8.13855C7.3676 8.32265 5.87166 7.56707 5.75484 7.46285C5.64238 7.36252 6.30121 6.77489 6.30121 6.77489C6.50611 6.87518 7.08691 7.12008 7.14111 7.06654Z"
        fill="#0C8FE4"
      />
    </svg>
  ) : (
    <div>
      <svg
        width="11"
        height="9"
        viewBox="0 0 11 9"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M10.2103 0.156208L3.66648 7.71651L0.789354 4.41763C0.608904 4.20936 0.315787 4.20936 0.135337 4.41763C-0.0451125 4.62591 -0.0451125 4.9631 0.135337 5.17084L3.34084 8.84579C3.51946 9.0514 3.8167 9.0514 3.99532 8.84579L10.8643 0.909415C11.0452 0.701671 11.0452 0.363952 10.8643 0.156208C10.6839 -0.0520693 10.3908 -0.0520693 10.2103 0.156208Z"
          fill="#0C8FE4"
        />
      </svg>
    </div>
  )
}

export default Date
