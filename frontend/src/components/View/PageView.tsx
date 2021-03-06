import React from 'react';
import Grid from '@material-ui/core/Grid';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { Button, List } from '../UI';

type PageViewProps = {
	open : boolean;
	handleSideBarOpen : any;
}

function PageView({ open, handleSideBarOpen } : PageViewProps) {
	return (
		<>
			<Grid className="page">
				{
					open ?
						undefined
						: <ArrowForwardIosIcon onClick={handleSideBarOpen}>click</ArrowForwardIosIcon>
				}
				<h4>{open ? '열림' : '닫힘'}</h4>
				<Button
					classList={['hi', 'hello']} // 추가하고 싶은 class name 넘기기
					value={<ArrowForwardIosIcon>hi</ArrowForwardIosIcon>} // 버튼 안에 표시하고 싶은 요소 넘기기
					// tooltip="tooltip value" // tooltip으로 표시하고 싶은 string 넘기기
					// ttside="right" // tooltip을 표시하고 싶은 위치 넘기기 (top, right, bottom, left)
				/>
				<List mainTitle="제목" /* for test only */ />
			</Grid>
		</>
	);
}

export default PageView;
