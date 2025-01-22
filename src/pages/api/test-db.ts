import { NextApiRequest, NextApiResponse } from 'next'
import { supabase } from '@/lib/supabase'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { data, error } = await supabase.from('modules').select('*').limit(1)
    
    if (error) throw error

    res.status(200).json({ message: 'Connection successful', data })
  } catch (error) {
    res.status(500).json({ message: 'Error connecting to the database', error: error.message })
  }
}