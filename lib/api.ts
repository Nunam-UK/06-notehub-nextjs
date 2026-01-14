import axios from 'axios';
import { Note, FetchNotesResponse, CreateNotePayload } from '../types/note';

const TOKEN = process.env.NEXT_PUBLIC_NOTEHUB_TOKEN;

const noteService = axios.create({
  baseURL: 'https://notehub-public.goit.study/api',
  headers: {
    Authorization: `Bearer ${TOKEN}`,
  },
});

export const fetchNotes = async (page: number = 1, search: string = ''): Promise<FetchNotesResponse> => {
  const { data } = await noteService.get<FetchNotesResponse>('/notes', {
    params: {
      page,
      search,
      perPage: 12,
    },
  });
  return data;
};

// Нова функція для динамічної сторінки /notes/[id]
export const fetchNoteById = async (id: string): Promise<Note> => {
  const { data } = await noteService.get<Note>(`/notes/${id}`);
  return data;
};

export const createNote = async (noteData: CreateNotePayload): Promise<Note> => {
  const { data } = await noteService.post<Note>('/notes', noteData);
  return data;
};

export const deleteNote = async (id: string): Promise<Note> => {
  const { data } = await noteService.delete<Note>(`/notes/${id}`);
  return data;
};