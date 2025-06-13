import './App.css'
import ColorTabs from './components/ColorTabs'
import Lanyard from './components/Lanyard'
import Squares from './components/Squares'

function App() {



    return (
        <div className="min-h-screen w-full m-0 p-0">
            <div style={{ width: '100%', height: '100vh', position: 'absolute', top: 0, left: 0, zIndex: -1 }} className='bg-black'>
                <Squares speed={0.5}
                    squareSize={50}
                    direction='diagonal'
                    borderColor='#fff'
                    hoverFillColor='#222' />

            </div>


            <BlobCursor
                blobType="circle"
                fillColor="#00FFFF"
                trailCount={3}
                sizes={[30, 30, 60]}
                innerSizes={[20, 35, 25]}
                innerColor="rgba(255,255,255,0.8)"
                opacities={[1.0, 0.6, 0.6]}
                shadowColor="rgba(0,0,0,0.75)"
                shadowBlur={5}
                shadowOffsetX={10}
                shadowOffsetY={10}
                filterStdDeviation={30}
                useFilter={true}
                fastDuration={0.1}
                slowDuration={0.5}
                zIndex={100}
            />

            <div className="fixed mt-12 top-0 left-1/2 transform -translate-x-1/2 z-50">
                <ColorTabs/>

            </div>

            <div className="container mx-auto px-32 pt-20 flex justify-between items-center min-h-screen gap-32">
                <div className="w-1/2 text-white ">
                    {/* POST YOUR LEFT SIDE CONTENT INSIDE THIS DIV */}
                </div>
                <div className="w-1/2 flex justify-end ">
                <Lanyard position={[0, 0, 20]} gravity={[0, -40, 0]} fov={20} transparent={true} />

                </div>
            </div>

        </div>
    )
}

export default App
