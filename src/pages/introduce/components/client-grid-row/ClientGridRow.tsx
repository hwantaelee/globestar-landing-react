interface Client {
    ci: string;
    clientName: string;
}

interface Props {
    clients: Client[];
}

export default function ClientGridRow({ clients }: Props) {

    const MAX_SIZE = 4;
    const EMPTY_SIZE = MAX_SIZE - clients.length;

    return <div className="w-full flex gap-4">
        {clients.map((client, index) => <div key={index} className="flex-1 flex flex-col gap-1 items-center">
            <img src={client.ci} className="w-[70%] h-16 object-fill" />
            <p className="h-4">{client.clientName}</p>
        </div>)}
        {Array.from({ length: EMPTY_SIZE }, (_, i) => i).map(value => <div key={value} className="flex flex-1 h-20" />)}
    </div>
}