import React from 'react'
import img11 from '../../assets/svg/11.svg';
import Text from '../../shared/ui/Text';
import Button from '../../shared/ui/Button';
interface Headesh {
  title: string;
   onAddClick?: () => void
}
function HeaDash({children , onAddClick }: Headesh) {

  return (
      <div className='section' style={{display: 'flex', justifyContent:'space-between', borderBottom: '1px solid #D2D2D2', paddingBottom: '8px', alignItems:'center'}}>
                <Text children={children} />
                 <Button children={'Добавить'} onClick={onAddClick}/>
            </div>
  )
}

export default HeaDash
