import { Modal } from 'antd';
import DropDown from '../dropDown/dropDown';
import Input from '../input/input';
const ModalComponent = ({isModalOpen,handleOk,handleCancel,title,modalField,handleOnChange,inputObj}) => {
  return (
    <>
       <Modal width={500}  title={title} open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        {modalField.map((item,index) => {if(item.type != "dropDown") {
        return <Input  status ={item.status}  key={index} title={item.title} type ={item.type} value = {inputObj[item.title]} onChange ={(e) => {handleOnChange(e.target.value,item.title,index)}} />}
        return <DropDown  type={'dropDown'} key={index} handleDropdownChange ={(e) =>{handleOnChange(e.target.value,item.title)}} selectedValue ={inputObj[item.title]} data ={item}/>
        })}
       </Modal>
    </>
  );
};
export default ModalComponent;