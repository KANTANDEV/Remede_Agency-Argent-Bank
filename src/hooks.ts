//* Import the useDispatch and useSelector hooks from React Redux
//? Importation des hooks useDispatch et useSelector de React Redux
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'

//* Import the RootState and AppDispatch types from the store
//? Importation des types RootState et AppDispatch du store
import type { RootState, AppDispatch } from './store'


//* The last two lines of the code export the 'useAppDispatch' and 'useAppSelector' constants, which are
//* the 'useDispatch' and 'useSelector' hooks with their respective types 'AppDispatch' and 'RootState' as their return types. This is done to avoid TS errors
//? Les deux dernières lignes de code exportent les constantes 'useAppDispatch' et 'useAppSelector' qui sont respectivement 
//? les hooks 'useDispatch' et 'useSelector' avec leurs types respectifs 'AppDispatch' et 'RootState' comme types de retour. Afin d'eviter les erreur TS
export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
