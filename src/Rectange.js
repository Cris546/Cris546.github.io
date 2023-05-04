import Rectangle from 'react-rectangle'

export default function Rec(){
    return (
        <Rectangle aspectRatio={[5, 2]}>
            <div style={{
                borderStyle: 'solid',
                width: '100%',
                height: '100%',
                borderRadius: '4px'
            }}
            />
        </Rectangle>
    )
}