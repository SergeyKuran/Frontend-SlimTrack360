// import { useRef, useEffect } from 'react';

// import goalsDesc1xPng from '../../assets/imgGoal/goals-desctop-1x-min.png';
// import goalsDesc2xPng from '../../assets/imgGoal/goals-desctop-2x-min.png';
// import goalsDesc3xPng from '../../assets/imgGoal/goals-desctop-3x-min.png';
// import goalsTab1xPng from '../../assets/imgGoal/goals-tablet-1x-min.png';
// import goalsTab2xPng from '../../assets/imgGoal/goals-tablet-2x-min.png';
// import goalsTab3xPng from '../../assets/imgGoal/goals-tablet-3x-min.png';
// import goalsMob1xPng from '../../assets/imgGoal/goals-mobile-1x-min.png';
// import goalsMob2xPng from '../../assets/imgGoal/goals-mobile-2x-min.png';
// import goalsMob3xPng from '../../assets/imgGoal/goals-mobile-3x-min.png';

// import goalsDesc1xWebp from '../../assets/imgGoal/goals-desctop-1x-min.webp';
// import goalsDesc2xWebp from '../../assets/imgGoal/goals-desctop-2x-min.webp';
// import goalsDesc3xWebp from '../../assets/imgGoal/goals-desctop-3x-min.webp';
// import goalsTab1xWebp from '../../assets/imgGoal/goals-tablet-1x-min.webp';
// import goalsTab2xWebp from '../../assets/imgGoal/goals-tablet-2x-min.webp';
// import goalsTab3xWebp from '../../assets/imgGoal/goals-tablet-3x-min.webp';
// import goalsMob1xWebp from '../../assets/imgGoal/goals-mobile-1x-min.webp';
// import goalsMob2xWebp from '../../assets/imgGoal/goals-mobile-2x-min.webp';
// import goalsMob3xWebp from '../../assets/imgGoal/goals-mobile-3x-min.webp';

// import {
//   Container,
//   DescWrapper,
//   StyleBackLink,
//   StyleBtnColumn,
//   StylePicture,
//   StyleSubtitle,
//   StyleTitle,
//   StylesSection,
//   Wrapper,
// } from '../../components/SignupSteps/SignupGoal/SignupGoal.styled';
// import GoalForm from '../../components/SignupSteps/SignupGoal/GoalForm';

// const SignUpGoal = () => {
//   const backLinkLocationRef = useRef('/signup');
//   const handleBackClick = () => {
//     window.location.href = backLinkLocationRef.current;
//   };
//   useEffect(() => {
//     backLinkLocationRef.current = ' /team-project-SlimTrack360/signup';
//   }, []);

//   return (
//     <StylesSection>
//       <Container>
//         <Wrapper>
//           <StylePicture>
//             <source
//               media="(min-width: 1440px)"
//               srcSet={`${goalsDesc1xWebp} 1x, ${goalsDesc2xWebp} 2x, ${goalsDesc3xWebp} 3x`}
//               type="image/webp"
//             />
//             <source
//               media="(min-width: 1440px)"
//               srcSet={`${goalsDesc1xPng} 1x, ${goalsDesc2xPng} 2x, ${goalsDesc3xPng} 3x`}
//               type="image/webp"
//             />
//             <source
//               media="(min-width: 768px)"
//               srcSet={`${goalsTab1xWebp} 1x, ${goalsTab2xWebp} 2x, ${goalsTab3xWebp} 3x`}
//               type="image/webp"
//             />
//             <source
//               media="(min-width: 768px)"
//               srcSet={`${goalsTab1xPng} 1x, ${goalsTab2xPng} 2x, ${goalsTab3xPng} 3x`}
//               type="image/png"
//             />
//             <source
//               media="(max-width: 767px)"
//               srcSet={`${goalsMob1xWebp} 1x, ${goalsMob2xWebp} 2x, ${goalsMob3xWebp} 3x`}
//               type="image/webp"
//             />
//             <source
//               media="(max-width: 767px)"
//               srcSet={`${goalsMob1xPng} 1x, ${goalsMob2xPng} 2x, ${goalsMob3xPng} 3x`}
//               type="image/png"
//             />
//             <img src={goalsTab1xPng} alt="Goal" />
//           </StylePicture>
//           <DescWrapper>
//             <StyleTitle>Your goal</StyleTitle>
//             <StyleSubtitle>
//               Choose a goal so that we can help you effectively
//             </StyleSubtitle>
//             <StyleBtnColumn>
//               <GoalForm />
//               <StyleBackLink onClick={handleBackClick}>Back</StyleBackLink>
//             </StyleBtnColumn>
//           </DescWrapper>
//         </Wrapper>
//       </Container>
//     </StylesSection>
//   );
// };

// export default SignUpGoal;
