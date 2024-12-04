import React, { useState, useEffect } from 'react';
import { FormControl, InputLabel, Input, FormHelperText } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';

const CriarTarefa = ({ handleClose, tarefas, setTarefas }) => {
  const [idTarefa, setIdTarefa] = useState();
  const [tituloTarefa, setTituloTarefa] = useState('');
  const [descricaoTarefa, setDescricaoTarefa] = useState('');
  const [inicioTarefa, setInicioTarefa] = useState('');
  const [fimTarefa, setFimTarefa] = useState('');
  const [recursoTarefa, setRecursoTarefa] = useState('');
  const [statusTarefa, setStatusTarefa] = useState('');

  useEffect(() => {
    const proximoId = tarefas.length > 0 ? Math.max(...tarefas.map(tarefa => tarefa.idTarefa)) + 1 : 1;
    setIdTarefa(proximoId);
  }, [tarefas]);

  const handleSalvar = () => {
    if (!tituloTarefa || !descricaoTarefa || !inicioTarefa || !fimTarefa || !recursoTarefa || !statusTarefa) {
      alert('Todos os campos são obrigatórios.');
      return;
    }

    const novaTarefa = {
      idTarefa,
      tituloTarefa,
      descricaoTarefa,
      inicioTarefa,
      fimTarefa,
      recursoTarefa,
      statusTarefa
    };

    setTarefas([...tarefas, novaTarefa]);
    handleClose();
  };

  return (
    <Grid container spacing={2}>
      <Card sx={style}>
        <CardHeader title="Cadastro de Tarefas" subheader="Preencha os dados da nova tarefa" />
        <CardContent sx={{ width: '95%', maxWidth: '100%' }}>
          <Grid item xs={12}>
            <FormControl fullWidth>
              <Input
                id="tarefa_titulo"
                value={tituloTarefa}
                onChange={(e) => setTituloTarefa(e.target.value)}
                aria-describedby="tarefa_titulo_helper_text"
              />
              <FormHelperText id="tarefa_titulo_helper_text">Título da Tarefa</FormHelperText>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <FormControl fullWidth>
              <Input
                id="tarefa_descricao"
                value={descricaoTarefa}
                onChange={(e) => setDescricaoTarefa(e.target.value)}
                aria-describedby="tarefa_descricao_helper_text"
              />
              <FormHelperText id="tarefa_descricao_helper_text">Descrição da Tarefa</FormHelperText>
            </FormControl>
          </Grid>
          <Grid container spacing={2} mt={1}>
            <Grid item xs={3}>
              <FormControl fullWidth>
                <Input
                  id="tarefa_inicio"
                  type="date"
                  value={inicioTarefa}
                  onChange={(e) => setInicioTarefa(e.target.value)}
                />
                <FormHelperText id="tarefa_inicio_helper_text">Início da Tarefa</FormHelperText>
              </FormControl>
            </Grid>
            <Grid item xs={3}>
              <FormControl fullWidth>
                <Input
                  id="tarefa_fim"
                  type="date"
                  value={fimTarefa}
                  onChange={(e) => setFimTarefa(e.target.value)}
                />
                <FormHelperText id="tarefa_fim_helper_text">Fim da Tarefa</FormHelperText>
              </FormControl>
            </Grid>
            <Grid item xs={3}>
              <FormControl fullWidth>
                <InputLabel>Recurso</InputLabel>
                <Select
                  id="tarefa_recurso"
                  value={recursoTarefa}
                  onChange={(e) => setRecursoTarefa(e.target.value)}
                >
                  <MenuItem value={'Recurso 1'}>Recurso 1</MenuItem>
                  <MenuItem value={'Recurso 2'}>Recurso 2</MenuItem>
                  <MenuItem value={'Recurso 3'}>Recurso 3</MenuItem>
                </Select>
                <FormHelperText>Selecione o Recurso</FormHelperText>
              </FormControl>
            </Grid>
            <Grid item xs={3}>
              <FormControl fullWidth>
                <InputLabel>Status</InputLabel>
                <Select
                  id="tarefa_status"
                  value={statusTarefa}
                  onChange={(e) => setStatusTarefa(e.target.value)}
                >
                  <MenuItem value={'Aguardando'}>Aguardando</MenuItem>
                  <MenuItem value={'Em Andamento'}>Em Andamento</MenuItem>
                  <MenuItem value={'Concluída'}>Concluída</MenuItem>
                </Select>
                <FormHelperText>Selecione o Status</FormHelperText>
              </FormControl>
            </Grid>
          </Grid>
          <Grid container spacing={2} pl={2} mt={2}>
            <Grid item xs={6}>
              <Button size="small" variant="contained" onClick={handleSalvar}>Salvar</Button>
            </Grid>
            <Grid item xs={6}>
              <Button size="small" variant="outlined" onClick={handleClose}>Cancelar</Button>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Grid>
  );
};

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '60%',
  bgcolor: 'background.paper',
  p: 4,
};

export default CriarTarefa;
