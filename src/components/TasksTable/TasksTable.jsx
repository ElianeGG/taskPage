import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Button, Table, Modal } from "antd";
import { useState } from "react";
import AddTask from "/Users/eliane/task_app/src/components/AddTask";
//import DeleteModal from "../Modals/DeleteModal";
//import EditModal from "../Modals/EditModal";
import "../TasksTable/TasksTable.css";



const getColumns = (onDelete) => [
    {
      key: "name",
      title: "Task Name",
      dataIndex: "name",
      sorter: (a, b) => a.name - b.name,
    },
    {
      key: "description",
      title: "Description",
      dataIndex: "description",
      sorter: (a, b) => a.description - b.description,
    },
    {
      key: "priority",
      title: "Priority",
      dataIndex: "priority",
      sorter: (a, b) => a.priority - b.priority,
    },
    {
      key: "date",
      title: "Date",
      dataIndex: "date",
      sorter: (a, b) => a.date - b.date,
    },
    {
      key: "contact",
      title: "Contact",
      dataIndex: "contact",
      sorter: (a, b) => a.contact - b.contact,
    },
    {
      key: "",
      title: "",
      dataIndex: "",
      render: (record) => {
        return (
          <>
            <EditOutlined/> 
            <DeleteOutlined onClick={()=>{onDelete(record)}} style={{ marginLeft: 12 }} />
          </>
        );
      },
    },
  ];

  const data = [
    {
      id: 1,
      name: "New Employee",
      description: "Set onbording section",
      priorty: "Medium",
      date: "25/4/2025",
      contact: "https://tekolio.com/",
    },
    {
      id: 2,
      name: "Ervin Howell",
      description: "Shanna@melissa.org",
      priorty: "New York Victor Plains Suite 879",
      date: "26/4/2025",
      contact: "anastasia.net",
    },
    {
      id: 3,
      name: "Clementine Bauch",
      description: "Nathan@yesenia.net",
      priorty: "Douglas Extension uitzipcod",
      date: "27/4/2025",
      contact: "ramiro.info",
    },
    {
      id: 4,
      name: "Patricia Lebsack",
      description: "Julianne.OConner@kory.org",
      priorty: "Hoeger Mal Apt. 692 South Elvis",
      date: "3/7/2025",
      contact: "kale.biz",
    },
    {
      id: 5,
      name: "Chelsey Dietrich",
      description: "Lucio_Hettinger@annie.com",
      priorty: "Skiles ks Suit 51 Roscoevi",
      date: "28/4/2025",
      contact: "demarco.info",
    },
    {
      id: 6,
      name: "Mrs. Dennis Schulist",
      description: "Karley_Dach@jasper.net",
      priorty: "Norberto Crossing",
      date: "25/4/2025",
      contact: "ola.org",
    },
    {
      id: 7,
      name: "Kurtis Weissnat",
      description: "Telly.Hoeger@billy.com",
      priorty: "Rex Tra Suite 2 Howemouth",
      date: "15/5/2025",
      contact: "elvis.io",
    },
    {
      id: 8,
      name: "Nicholas Runolfsdottir V",
      description: "Sherwood@rosamond.net",
      priorty: "Ellsworth mit Sui 729 Aliyavi",
      date: "2/6/2025",
      contact: "jacynthe.com",
    },
    {
      id: 9,
      name: "Glenna Reichert",
      description: "Chaim_McDermott@dana.org",
      priorty: "Dayna Park uitzipcod",
      date: "2/7/2025",
      contact: "conrad.com",
    },
    {
      id: 10,
      name: "Clementina DuBuque",
      description: "Rey.Padberg@karina.com",
      priorty: "Kattie Turnpike Suite 198 Lebsackbury",
      date: "09/4/2025",
      contact: "ambrose.net",
    },
  ];
  
  const TasksTable = () => {

const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => setIsModalOpen(true);

  const handleOK = () => setIsModalOpen(false);

  const handleCancel = () => setIsModalOpen(false);

    return (
        <>

    <div className="table-title">
        <div className="row"> 
         <div className="col-sm-6">
            <h2>Task <b>List</b></h2>
     </div>       
        </div>
        <div className="col-sm-6">
        <Button onClick={showModal}>+ Task</Button>
        <Table dataSource={data} columns={getColumns()} pagination={false}/>
        </div>
  </div>

  <>
        <Modal
          title="New Task "
          open={isModalOpen}
          onOK={handleOK}
          onCancel={handleCancel}
        >
          <AddTask />
        </Modal>
      </>
      </>
    
    //const onDelete = (record) => {
        //return (
          //  <div className="deleteModal">
            //  <DeleteModal />
            //</div>
          //);
          
       // console.log("deleting...")
    //}

   // const onEdit= (record) => {
     //   return (
       //     <div className="editModal">
         //       <EditModal />
           // </div>
        //);
    //}

    
  
    ) 
  };

  export default TasksTable;