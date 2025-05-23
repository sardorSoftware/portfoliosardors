import React from 'react'
import './footer.css'

const Footer = () => {
	return (
		<footer className='footer'>
			<div className='footer__container container'>
				<h1 className='footer__title'>Sardor</h1>

				<ul className='footer__list'>
					<li>
						<a href='#about' className='footer__link'>
							About
						</a>
					</li>

					<li>
						<a href='#portfolio' className='footer__link'>
							Projects
						</a>
					</li>

				</ul>

				<div className='footer__social'>
					<a
						href='https://www.facebook.com/profile.php?id=100083816235782&mibextid=LQQJ4d'
						className='footer__social-link'
						target='_blank'
					>
						<i className='bx bxl-facebook '></i>
					</a>

					<a
						href='https://www.instagram.com/1sr.z_?igsh=b3czM3R6d21nbXBo&utm_source=qr'
						className='footer__social-link'
						target='_blank'
					>
						<i className='bx bxl-instagram'></i>
					</a>

					<a
						href='https://github.com/sardorSoftware'
						className='footer__social-link'
						target='_blank'
					>
						<i className='bx bxl-twitter'></i>
					</a>
				</div>

				<span className='footer__copy'>
					&#169; Crypticalcoder. All rigths reserved
				</span>
			</div>
		</footer>
	)
}

export default Footer
