import React from "react";
import "../styles/footer.css";
import GitHub from '@mui/icons-material/GitHub';
import LinkedIn from '@mui/icons-material/LinkedIn';
import YouTube from '@mui/icons-material/YouTube';


const Footer = () => {
	return (
		<div className="footer">
			<div className="socialMedia"> 
				<a href="https://github.com/MerlinRose2000">
					<GitHub />
				</a> 

				<a href="https://www.linkedin.com/in/emilia-stewart/">
					<LinkedIn />
				</a>

				<a href="https://www.youtube.com/channel/UCHGDszaLFwaxnTRIsKBukQw">
					<YouTube />
				</a>
			</div>
		</div>
		
	);
}

export default Footer;
