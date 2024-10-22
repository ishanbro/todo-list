// import React from 'react';
// import './Kanban.css';
// // import dotgrey from '../public/icons_FEtask/dotgrey.svg'
// // KanbanBoard component
// const KanbanBoard = ({ tickets, users, grouping, ordering }) => {
//     const groupTickets = (tickets) => {
//         switch (grouping) {
//             case 'Status':
//                 return groupByStatus(tickets);
//             case 'User':
//                 return groupByUser(tickets);
//             case 'Priority':
//                 return groupByPriority(tickets);
//             default:
//                 return groupByStatus(tickets);
//         }
//     };

//     const sortTickets = (tickets) => {
//         switch (ordering) {
//             case 'Priority':
//                 return [...tickets].sort((a, b) => b.priority - a.priority);
//             case 'Title':
//                 return [...tickets].sort((a, b) => a.title.localeCompare(b.title));
//             default:
//                 return tickets;
//         }
//     };

//     const groupByStatus = (tickets) => {
//         return tickets.reduce((groups, ticket) => {
//             (groups[ticket.status] = groups[ticket.status] || []).push(ticket);
//             return groups;
//         }, {});
//     };

//     const groupByUser = (tickets) => {
//         return tickets.reduce((groups, ticket) => {
//             const user = users.find((u) => u.id === ticket.userId)?.name || 'Unknown';
//             (groups[user] = groups[user] || []).push(ticket);
//             return groups;
//         }, {});
//     };

//     const groupByPriority = (tickets) => {
//         return tickets.reduce((groups, ticket) => {
//             const priorityLabel = getPriorityLabel(ticket.priority);
//             (groups[priorityLabel] = groups[priorityLabel] || []).push(ticket);
//             return groups;
//         }, {});
//     };

//     const getPriorityLabel = (priority) => {
//         switch (priority) {
//             case 4:
//                 return 'Urgent';
//             case 3:
//                 return 'High';
//             case 2:
//                 return 'Medium';
//             case 1:
//                 return 'Low';
//             case 0:
//                 return 'No Priority';
//             default:
//                 return 'Unknown';
//         }
//     };

//     const getPriorityIcon = (priorityLabel) => {
//         switch (priorityLabel) {
//             case 'Urgent':
//                 return 'icons_FEtask/urgent.svg';
//             case 'High':
//                 return 'icons_FEtask/high.svg';
//             case 'Medium':
//                 return 'icons_FEtask/medium.svg';
//             case 'Low':
//                 return 'icons_FEtask/low.svg';
//             case 'No Priority':
//                 return 'icons_FEtask/No-priority.svg';
//             default:
//                 return 'icons_FEtask/No-priority.svg';
//         }
//     };

//     const groupedTickets = groupTickets(sortTickets(tickets));

//     return (
//         <div className="kanban-board">
//             {Object.keys(groupedTickets).map((group, index) => (
//                 <div key={index} className="kanban-column">
//                     <div className="header">
//                         <div ><h2><img className='doti' src='icons_FEtask\No-priority.svg'></img>{group}<h4>{groupedTickets[group].length}</h4></h2>
//                         </div>
//                         <div><img src='icons_FEtask\add.svg'></img><img src='icons_FEtask\3 dot menu.svg'></img></div>
//                     </div>
//                     <ul>
//                         {groupedTickets[group].map((ticket) => 
//                         (
//                             <li key={ticket.id}>
//                                 <div className="card-header">
//                                     <div className="avatar">
//                                         {users.find((user) => user.id === ticket.userId)?.name.charAt(0)}
//                                     </div>
//                                     <strong>{ticket.title}</strong>
//                                 </div >
//                                 <div className="tags" style={{width: '115px'}}>
//                                     {/* <small className="priority">{getPriorityLabel(ticket.priority)}</small> */}
//                                     {/* <small className="status">{ticket.status}</small> */}
//                                     <img className='dotgrey' src="/icons_FEtask/dotgrey.svg" alt="Grey dot" />
//                                     <small  >{ticket.tag.join(', ')}</small>
//                                 </div>
//                             </li>
//                         ))}
//                     </ul>
//                 </div>
//             ))}
//         </div>
//     );
// };

// export default KanbanBoard;
import React from 'react';
import './Kanban.css';

const KanbanBoard = ({ tickets, users, grouping, ordering }) => {
    const groupTickets = (tickets) => {
        switch (grouping) {
            case 'Status':
                return groupByStatus(tickets);
            case 'User':
                return groupByUser(tickets);
            case 'Priority':
                return groupByPriority(tickets);
            default:
                return groupByStatus(tickets);
        }
    };

    const sortTickets = (tickets) => {
        switch (ordering) {
            case 'Priority':
                return [...tickets].sort((a, b) => b.priority - a.priority);
            case 'Title':
                return [...tickets].sort((a, b) => a.title.localeCompare(b.title));
            default:
                return tickets;
        }
    };

    const groupByStatus = (tickets) => {
        return tickets.reduce((groups, ticket) => {
            (groups[ticket.status] = groups[ticket.status] || []).push(ticket);
            return groups;
        }, {});
    };

    const groupByUser = (tickets) => {
        return tickets.reduce((groups, ticket) => {
            const user = users.find((u) => u.id === ticket.userId)?.name || 'Unknown';
            (groups[user] = groups[user] || []).push(ticket);
            return groups;
        }, {});
    };

    // const groupByPriority = (tickets) => {
    //     return tickets.reduce((groups, ticket) => {
    //         const priorityLabel = getPriorityLabel(ticket.priority);
    //         (groups[priorityLabel] = groups[priorityLabel] || []).push(ticket);
    //         return groups;
    //     }, {});
    // };

    const getPriorityLabel = (priority) => {
        switch (priority) {
            case 4:
                return 'Urgent';
            case 3:
                return 'High';
            case 2:
                return 'Medium';
            case 1:
                return 'Low';
            case 0:
                return 'No Priority';
            default:
                return 'Unknown';
        }
    };

    const getPriorityIcon = (priority) => {
        switch (priority) {
            case 4:
                return '/icons_FEtask/SVG - Urgent Priority colour.svg';
            case 3:
                return '/icons_FEtask/Img - High Priority.svg';
            case 2:
                return '/icons_FEtask/Img - Medium Priority.svg';
            case 1:
                return '/icons_FEtask/Img - Low Priority.svg';
            case 0:
            default:
                return '/icons_FEtask/No-priority.svg';
        }
    };

    const groupByPriority = (tickets) => {
        const priorityGroups = {
            'No Priority': [],
            'Low': [],
            'Medium': [],
            'High': [],
            'Urgent': []
        };

        tickets.forEach(ticket => {
            switch (ticket.priority) {
                case 4:
                    priorityGroups['Urgent'].push(ticket);
                    break;
                case 3:
                    priorityGroups['High'].push(ticket);
                    break;
                case 2:
                    priorityGroups['Medium'].push(ticket);
                    break;
                case 1:
                    priorityGroups['Low'].push(ticket);
                    break;
                case 0:
                default:
                    priorityGroups['No Priority'].push(ticket);
                    break;
            }
        });

        // Remove empty groups
        return Object.fromEntries(
            Object.entries(priorityGroups).filter(([_, tickets]) => tickets.length > 0)
        );
    };

    const getPriorityValue = (priorityLabel) => {
        const priorityMap = {
            'Urgent': 4,
            'High': 3,
            'Medium': 2,
            'Low': 1,
            'No Priority': 0
        };
        return priorityMap[priorityLabel] ?? 0;
    };

    const groupedTickets = groupTickets(sortTickets(tickets));

    return (
        <div className="kanban-board">
            {Object.keys(groupedTickets).map((group, index) => (
                <div key={index} className="kanban-column">
                    <div className="header">
                        <div>
                            <h2>
                                <img 
                                    className='priority-icon' 
                                    src={getPriorityIcon(getPriorityValue(group))} 
                                    alt={group}
                                />
                                {group}
                                <h4>{groupedTickets[group].length}</h4>
                            </h2>
                        </div>
                        <div>
                            <img src='/icons_FEtask/add.svg' alt="Add" />
                            <img src='/icons_FEtask/3 dot menu.svg' alt="Menu" />
                        </div>
                    </div>
                    <ul>
                        {groupedTickets[group].map((ticket) => (
                            <li key={ticket.id}>
                                <div>
                                <div className="card-header">  
                                    <strong className='CAM'>{ticket.id}</strong>
                        
                                    <strong ><img className='last' src='/icons_FEtask/To-do.svg'></img>{ticket.title}</strong>
                                </div>
                                <div className="tags" style={{width: '115px'}}>
                                    <img className='dotgrey' src="/icons_FEtask/dotgrey.svg" alt="Grey dot" />
                                    <small>{ticket.tag.join(', ')}</small>
                                </div>
                                </div>
                                <div className="avatar">
                                        {users.find((user) => user.id === ticket.userId)?.name.charAt(0)}
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
};

export default KanbanBoard;