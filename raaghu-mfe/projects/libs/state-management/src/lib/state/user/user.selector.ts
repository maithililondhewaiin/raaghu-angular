import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppState } from '../../app.interface';
import { selectApiResources } from '../api-resources/api-resources.selector';

import { UsersState } from './user.reducer';


export const Userselector  = (state: AppState) => state.user;
export const selectAllUsers = createSelector(
    Userselector,
    (state: UsersState) => state.users
);
export const selectUserForEdit = createSelector(
    Userselector,
    (state: UsersState) => state.rolesOfUser
);

export const selectUserRolesForEdit = createSelector(
    Userselector,
    (state: UsersState) => state.rolesOfUser
);
export const selectUserOrgForEdit = createSelector(
    Userselector,
    (state: UsersState) => state.orgOfuser
);

export const selectAvailableOrgUnit = createSelector(
    Userselector,
    (state: UsersState) => state.availableOrgUnit
);
export const selectAssignableRoles = createSelector(
    Userselector,
    (state: UsersState) => state.assignableRoles
);

export const selectAllUserFilterPermissions = createSelector(
    Userselector,
    (state: UsersState) => state.UserPermissionI
);
export const selectAllClaimTypes = createSelector(
    Userselector,
    (state: UsersState) => state.allClaimTypes
);
export const selectClaimTypes = createSelector(
    Userselector,
    (state: UsersState) => state.claimTypes
);
export const selectAllTT = createSelector(
    Userselector,
    (state: UsersState) => state
);
 
export const selectTextContent = createSelector(
    Userselector,
    (state: UsersState) => state
);

