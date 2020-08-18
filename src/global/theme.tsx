import React, {
  createContext, useReducer, useContext, Dispatch,
} from 'react';

type ThemeName = 'dark' | 'light';
interface ThemeStruct { theme: ThemeName, locked: boolean };

const initialThemeContext: ThemeStruct = { theme: 'light', locked: false };
const ThemeContext = createContext<ThemeStruct>(initialThemeContext);

type ThemeAction =
  { type: 'SET_THEME'; theme: ThemeName; }
  | { type: 'SET_LOCK_STATE'; locked: boolean; };
const themeReducer = (state: ThemeStruct, action: ThemeAction): ThemeStruct => {
  switch (action.type) {
    case 'SET_THEME':
      return {
        ...state,
        theme: action.theme,
      };
    case 'SET_LOCK_STATE':
      return {
        ...state,
        locked: action.locked,
      };
    default:
      return state;
  }
};

type ThemeDispatch = Dispatch<ThemeAction>;
const ThemeDispatchContext = createContext<ThemeDispatch | undefined>(undefined);

interface Props { children: React.ReactElement | React.ReactElement[] }
export const ThemeEnabled: React.SFC<Props> = ({ children }: Props) => {
  const [state, dispatch] = useReducer(themeReducer, initialThemeContext);
  return (
    <ThemeDispatchContext.Provider value={dispatch}>
      <ThemeContext.Provider value={state}>
        {children}
      </ThemeContext.Provider>
    </ThemeDispatchContext.Provider>
  );
};

export const useTheme = () => {
  const state = useContext(ThemeContext);
  const dispatch = useContext(ThemeDispatchContext);

  // Theme Setter
  const setTheme = (theme: ThemeName): void => {
    if (!state.locked) {
      document.documentElement.dataset.theme = theme === 'dark' ? 'dark' : 'light';
      dispatch({
        type: 'SET_THEME',
        theme,
      });
    }
  };

  // Theme Getter
  const getTheme = (): ThemeName => state.theme;

  // Lock Getter
  const isThemeLocked = (): boolean => state.locked;

  // Locker
  const lockTheme = (): void => {
    dispatch({
      type: 'SET_LOCK_STATE',
      locked: true,
    });
  };

  // Unlocker
  const unlockTheme = (): void => {
    dispatch({
      type: 'SET_LOCK_STATE',
      locked: false,
    });
  };

  return {
    getTheme, setTheme, lockTheme, unlockTheme, isThemeLocked,
  };
};

export default useTheme;
