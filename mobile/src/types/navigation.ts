import type { NativeStackScreenProps } from '@react-navigation/native-stack';

export type RootStackParamList = {
    Home: undefined;
    Detalhes: { id: number };
};

export type HomeProps = NativeStackScreenProps<RootStackParamList, 'Home'>;
export type DetalhesProps = NativeStackScreenProps<RootStackParamList, 'Detalhes'>;