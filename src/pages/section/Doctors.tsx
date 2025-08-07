import React, { useState } from 'react';
import './Doctors.scss';
import img12 from '../../assets/svg/12.svg';
import img13 from '../../assets/svg/13.svg';
import img14 from '../../assets/svg/14.svg';
import img15 from '../../assets/svg/15.svg';
import img16 from '../../assets/svg/16.svg';
import img17 from '../../assets/svg/17.svg';
import img18 from '../../assets/svg/18.svg';
import img19 from '../../assets/svg/19.svg';
import img20 from '../../assets/svg/20.svg';
import img21 from '../../assets/svg/21.svg';
import img22 from '../../assets/svg/22.svg';
import img23 from '../../assets/svg/23.svg';
import DoctorEditing from '../realize/DoctorEditing';
import DeleteModal from '../../shared/ui/DeleteModal';
import AboutDoctor from '../aboutdoctor/Aboutdoctor';

type Doctor = {
    id: number;
    name: string;
    username: string;
    email: string;
    tag: string;
    clients: number;
    avatar: string;
};

const doctorsData: Doctor[] = [
    {
        id: 1,
        name: "Алиса Керимова",
        username: "@jstevenson5c",
        email: "jordansteve@gmail.com",
        tag: "Хирург-ортопед",
        clients: 165,
        avatar: img12,
    },
    {
        id: 2,
        name: "Dejesus Michael",
        username: "@dejesus1michael",
        email: "dejesusmichael@gmail.com",
        tag: "Стоматолог",
        clients: 323,
        avatar: img15,
    },
    {
        id: 3,
        name: "Dee Alvarado",
        username: "@dee3alvarado",
        email: "deealvado@gmail.com",
        tag: "Рентгенолог",
        clients: 140,
        avatar: img16,
    },
    {
        id: 4,
        name: "Claude",
        username: "@claude",
        email: "claude@gmail.com",
        tag: "Стоматолог",
        clients: 543,
        avatar: img17,
    },
    {
        id: 5,
        name: "Cetes Kramer",
        username: "@cervantes4kramer",
        email: "cervantesamer@gmail.com",
        tag: "Хирург-ортопед",
        clients: 345,
        avatar: img18,
    },
    {
        id: 6,
        name: "Cande Munoz",
        username: "@candice3unoz",
        email: "candicenoz@gmail.com",
        tag: "Хирург-имплантолог",
        clients: 120,
        avatar: img19,
    },
    {
        id: 7,
        name: "Bolton Obrien",
        username: "@bolton4obrien",
        email: "boltonobrien@gmail.com",
        tag: "Стоматолог",
        clients: 250,
        avatar: img20,
    },
    {
        id: 8,
        name: "Berd Langley",
        username: "@bernardlangley",
        email: "bernardlgley@gmail.com",
        tag: "Педиатр",
        clients: 122,
        avatar: img21,
    },
    {
        id: 9,
        name: "Antonio",
        username: "@antonio",
        email: "antonio@gmail.com",
        tag: "Терапевт",
        clients: 765,
        avatar: img22,
    },
    {
        id: 10,
        name: "Alissa Nelson",
        username: "@alissa1nelson",
        email: "alissa1nelson@gmail.com",
        tag: "Стоматолог",
        clients: 451,
        avatar: img23,
    },
];

const Doctors: React.FC = () => {
    const [isEditing, setIsEditing] = useState(false);
    const [selectedDoctor, setSelectedDoctor] = useState<Doctor | null>(null);
    const [deletemodal, setdeletemodal] = useState(false)
    const [openinfo, setopeninfo] = useState(false)
    const openEditModal = (doctor: Doctor) => {
        setSelectedDoctor(doctor);
        setIsEditing(true);
    };

    const closeEditModal = () => {
        setIsEditing(false);
        setSelectedDoctor(null);
    };

    return (
        <div className='doctors'>
            <div className='table'>
                <div>
                    <span>Имя</span>
                    <span>Email</span>
                    <span>Теги</span>
                    <span>Клиенты</span>
                    <span>Действи</span>
                </div>
                <div style={{ borderBottom: "1px solid rgb(187, 187, 187)", marginTop: "12px" }}></div>
            </div>

            <div className='pagination-wrapper'>
                {doctorsData.map((doctor) => (
                    <div key={doctor.id} className='pagination'>
                        <div className='circle'>
                            <img src={doctor.avatar} alt={doctor.name} />
                            <div className='text'>
                                <h6 onClick={() => setopeninfo(true)}>{doctor.name}</h6>
                                <p>{doctor.username}</p>
                            </div>
                        </div>

                        <h4>{doctor.email}</h4>
                        <h4>{doctor.tag}</h4>
                        <h4>{doctor.clients}</h4>

                        <div className='imgs'>
                            <img src={img13} alt="delete" onClick={() => setdeletemodal(true)}/>
                            <img
                                src={img14}
                                alt="edit"
                                style={{ cursor: "pointer" }}
                                onClick={() => openEditModal(doctor)}
                            />
                        </div>
                    </div>
                ))}
            </div>

            {isEditing && selectedDoctor && (
                <DoctorEditing doctor={selectedDoctor} onClose={closeEditModal} />
            )}
            { deletemodal && (
                <div className='modal-backdrop' onClick={() => setdeletemodal(false)}>
                <div onClick={(e) => e.stopPropagation()}>
            <DeleteModal/>
                </div>
                </div>
            )

            }
            { openinfo && (
                <div>
            <AboutDoctor onClose={() => setopeninfo(false)}/>
                </div>
            )

            }
        </div>
    );
};

export default Doctors;
