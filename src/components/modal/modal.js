import { Modal } from 'antd';
import DropDown from '../dropDown/dropDown';
import Input from '../input/input';
const ModalComponent = ({isModalOpen,handleOk,handleCancel,title,modalField,handleBookOnChange,booksObj}) => {
  return (
    <>
       <Modal title={title} open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        {modalField.map((item,index) => {if(item.type != "dropDown") {
        return <Input  status ={item.status}  key={index} title={item.title} type ={item.type} value = {booksObj[item.title]} onChange ={(e) => {handleBookOnChange(e.target.value,item.title,index)}} />}
        return <DropDown  key={index} handleDropdownChange ={(e) =>{handleBookOnChange(e.target.value,item.title)}} selectedValue ={booksObj[item.title]} data ={item}/>
        })}
       </Modal>
    </>
  );
};
export default ModalComponent;