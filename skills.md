// Copyright 2018-2023 contributors to the Marquez project
// SPDX-License-Identifier: Apache-2.0

import * as Redux from 'redux'
import { Autocomplete, FormControl } from '@mui/material'
import { IState } from '../../store/reducers'
import { MqInputBase } from '../core/input-base/MqInputBase'
import { Namespace } from '../../types/api'
import { Nullable } from '../../types/util/Nullable'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { selectNamespace } from '../../store/actionCreators'
import { theme } from '../../helpers/theme'
import MqText from '../core/text/MqText'
import React from 'react'

interface OwnProps {}

interface StateProps {
  namespaces: Namespace[]
  selectedNamespace: Nullable<string>
}

interface DispatchProps {
  selectNamespace: typeof selectNamespace
}

type NamespaceSelectProps = OwnProps & StateProps & DispatchProps

const NamespaceSelect: React.FC<NamespaceSelectProps> = ({
  namespaces,
  selectedNamespace,
  selectNamespace,
}) => {
  const i18next = require('i18next')

  if (selectedNamespace) {
    return (
      <FormControl
        variant='outlined'
        sx={{
          minWidth: '220px',
          position: 'relative',
        }}
      >
        <Autocomplete
          id='namespace-select'
          options={namespaces.map((namespace) => namespace.name)}
          value={selectedNamespace}
          onChange={(_event, value) => {
            if (value) {
              selectNamespace(value)
            }
          }}
          disableClearable
          autoHighlight
          selectOnFocus
          openOnFocus
          noOptionsText='No namespaces found'
          slotProps={{
            paper: {
              sx: {
                backgroundImage: 'none',
              },
            },
          }}
          renderInput={(params) => (
            <MqInputBase
              ref={params.InputProps.ref}
              inputProps={params.inputProps}
              fullWidth={params.fullWidth}
              id={params.id}
              disabled={params.disabled}
              endAdornment={params.InputProps.endAdornment}
              startAdornment={
                <MqText color={theme.palette.primary.main} font={'mono'}>
                  {i18next.t('namespace_select.prompt')}
                </MqText>
              }
              placeholder='Search namespaces...'
              sx={{ cursor: 'text', gap: 1 }}
            />
          )}
        />
      </FormControl>
    )
  } else return null
}

const mapStateToProps = (state: IState) => ({
  namespaces: state.namespaces.result,
  selectedNamespace: state.namespaces.selectedNamespace,
})

const mapDispatchToProps = (dispatch: Redux.Dispatch) =>
  bindActionCreators(
    {
      selectNamespace: selectNamespace,
    },
    dispatch
  )

export default connect(mapStateToProps, mapDispatchToProps)(NamespaceSelect)
