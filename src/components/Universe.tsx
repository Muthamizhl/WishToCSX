import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Stars, Float, PerspectiveCamera, Environment } from '@react-three/drei';
import * as THREE from 'three';

const Snowflakes = ({ count = 5000 }) => {
    const points = useRef<THREE.Points>(null!);

    const particles = useMemo(() => {
        const pos = new Float32Array(count * 3);
        const vel = new Float32Array(count);
        for (let i = 0; i < count; i++) {
            pos[i * 3] = (Math.random() - 0.5) * 50;
            pos[i * 3 + 1] = Math.random() * 50 - 25;
            pos[i * 3 + 2] = (Math.random() - 0.5) * 50;
            vel[i] = 0.02 + Math.random() * 0.05;
        }
        return { pos, vel };
    }, [count]);

    useFrame((state) => {
        const { pos, vel } = particles;
        for (let i = 0; i < count; i++) {
            pos[i * 3 + 1] -= vel[i];
            if (pos[i * 3 + 1] < -25) pos[i * 3 + 1] = 25;

            // Add subtle horizontal drift
            pos[i * 3] += Math.sin(state.clock.elapsedTime * 0.5 + i) * 0.005;
        }
        points.current.geometry.attributes.position.needsUpdate = true;
    });

    return (
        <points ref={points}>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    args={[particles.pos, 3]}
                />
            </bufferGeometry>
            <pointsMaterial
                size={0.08}
                color="#ffffff"
                transparent
                opacity={0.6}
                sizeAttenuation
                blending={THREE.AdditiveBlending}
            />
        </points>
    );
};

const LightParticles = ({ count = 200 }) => {
    const points = useRef<THREE.Points>(null!);

    const particles = useMemo(() => {
        const pos = new Float32Array(count * 3);
        const vel = new Float32Array(count * 3);
        for (let i = 0; i < count; i++) {
            pos[i * 3] = (Math.random() - 0.5) * 30;
            pos[i * 3 + 1] = (Math.random() - 0.5) * 30;
            pos[i * 3 + 2] = (Math.random() - 0.5) * 30;
            vel[i * 3] = (Math.random() - 0.5) * 0.01;
            vel[i * 3 + 1] = (Math.random() - 0.5) * 0.01;
            vel[i * 3 + 2] = (Math.random() - 0.5) * 0.01;
        }
        return { pos, vel };
    }, [count]);

    useFrame(() => {
        const { pos, vel } = particles;
        for (let i = 0; i < count; i++) {
            pos[i * 3] += vel[i * 3];
            pos[i * 3 + 1] += vel[i * 3 + 1];
            pos[i * 3 + 2] += vel[i * 3 + 2];

            // Boundary check
            if (Math.abs(pos[i * 3]) > 15) vel[i * 3] *= -1;
            if (Math.abs(pos[i * 3 + 1]) > 15) vel[i * 3 + 1] *= -1;
            if (Math.abs(pos[i * 3 + 2]) > 15) vel[i * 3 + 2] *= -1;
        }
        points.current.geometry.attributes.position.needsUpdate = true;
        points.current.rotation.y += 0.001;
    });

    return (
        <points ref={points}>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    args={[particles.pos, 3]}
                />
            </bufferGeometry>
            <pointsMaterial
                size={0.15}
                color="#f59e0b"
                transparent
                opacity={0.8}
                sizeAttenuation
                blending={THREE.AdditiveBlending}
            />
        </points>
    );
};

const CinematicCamera = () => {
    const camRef = useRef<THREE.PerspectiveCamera>(null!);

    useFrame((state) => {
        const t = state.clock.elapsedTime;
        state.camera.position.x = Math.sin(t * 0.1) * 5;
        state.camera.position.z = 15 + Math.cos(t * 0.1) * 5;
        state.camera.position.y = 2 + Math.sin(t * 0.2) * 2;
        state.camera.lookAt(0, 0, 0);
    });

    return <PerspectiveCamera ref={camRef} makeDefault fov={45} />;
};

const Universe = () => {
    return (
        <div className="canvas-container">
            <Canvas shadows dpr={[1, 2]}>
                <color attach="background" args={['#2d0a0a']} />
                <fog attach="fog" args={['#2d0a0a', 5, 35]} />

                <CinematicCamera />

                <ambientLight intensity={0.2} />
                <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
                <pointLight position={[-10, -10, -10]} intensity={0.5} color="#fbbf24" />

                <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
                <Snowflakes />
                <LightParticles />

                <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
                    <mesh position={[0, 0, 0]}>
                        <sphereGeometry args={[1, 32, 32]} />
                        <meshStandardMaterial
                            color="#991b1b"
                            emissive="#f59e0b"
                            emissiveIntensity={0.1}
                            roughness={0.05}
                            metalness={0.9}
                        />
                    </mesh>
                    <mesh position={[0, 1.1, 0]}>
                        <cylinderGeometry args={[0.2, 0.2, 0.2, 32]} />
                        <meshStandardMaterial color="#f59e0b" metalness={1} roughness={0} />
                    </mesh>
                    <mesh position={[0, 0, 0]}>
                        <sphereGeometry args={[1.2, 32, 32]} />
                        <meshBasicMaterial color="#f59e0b" transparent opacity={0.05} />
                    </mesh>
                </Float>

                <Environment preset="night" />
            </Canvas>
        </div>
    );
};

export default Universe;
